import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { parseBase64 } from "./parse-base64";

const s3 = new S3Client({
    region: process.env.AWS_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export async function uploadImageAndPdfToS3(
    rawImg: string,
    rawDob: string,
    fdbaId: string,
): Promise<{ imageUrl: string; pdfUrl: string }> {
    const { contentType: pdfType, buffer: pdfBuffer } = parseBase64(rawDob);
    const { contentType: imageType, buffer: imageBuffer } = parseBase64(rawImg);

    const timestamp = Date.now();
    const imageName = `image-${timestamp}-${fdbaId}.${imageType.split("/")[1]}`;
    const pdfName = `dobProof-${timestamp}-${fdbaId}.pdf`;

    await Promise.all([
        s3.send(
            new PutObjectCommand({
                Bucket: "manim-bot",
                Key: `uploads/${imageName}`,
                Body: imageBuffer,
                ContentType: imageType,
            }),
        ),
        s3.send(
            new PutObjectCommand({
                Bucket: "manim-bot",
                Key: `uploads/${pdfName}`,
                Body: pdfBuffer,
                ContentType: pdfType,
            }),
        ),
    ]);

    return {
        imageUrl: `https://manim-bot.s3.amazonaws.com/uploads/${imageName}`,
        pdfUrl: `https://manim-bot.s3.amazonaws.com/uploads/${pdfName}`,
    };
}

export async function uploadPdfsToS3(
    player1Dob: string,
    player2Dob: string | null,
    player1Id: string,
    player2Id: string | null,
) {
    const { contentType: player1Type, buffer: player1Buffer } =
        parseBase64(player1Dob);
    const { contentType: player2Type, buffer: player2Buffer } = parseBase64(
        player2Dob || "",
    );
    const timestamp = Date.now();
    const docName1 = `image-${timestamp}-${player1Id}.${player1Type.split("/")[1]}`;
    const docName2 = `image-${timestamp}-${player2Id}.${player2Type.split("/")[1]}`;
    await s3.send(
        new PutObjectCommand({
            Bucket: "manim-bot",
            Key: `uploads/${docName1}`,
            Body: player1Buffer,
            ContentType: player1Type,
        }),
    );
    if (player2Id) {
        await s3.send(
            new PutObjectCommand({
                Bucket: "manim-bot",
                Key: `uploads/${docName2}`,
                Body: player2Buffer,
                ContentType: player2Type,
            }),
        );
    }
    return {
        docUrl1: `https://manim-bot.s3.amazonaws.com/uploads/${docName1}`,
        docUrl2: player2Id
            ? `https://manim-bot.s3.amazonaws.com/uploads/${docName2}`
            : null,
    };
}
