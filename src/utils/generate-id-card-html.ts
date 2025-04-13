const template = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Global styles */
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      box-sizing: border-box;
    }

    /* Card container */
    .card-container {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: center;
      padding: 1rem;
      gap: 1rem;
      user-select: none;
    }

    @media (max-width: 768px) {
      .card-container {
        flex-direction: column;
      }
    }

    /* Card styles */
    .card {
      width: 100%;
      height: 575px;
      max-width: 400px;
      border: 8px solid #8B4513; /* brown */
      padding: 0.25rem;
      overflow: hidden;
    }

    .card-content {
      padding: 0;
      height: 100%;
    }

    /* Card Front */
    .card-front {
      border: 8px solid #FFA500; /* orange */
      background-color: white;
      padding: 1.5rem;
      height: 100%;
      position: relative;
    }

    /* Card Back */
    .card-back {
      border: 8px solid #FFA500; /* orange */
      background-color: white;
      padding: 1.5rem;
      height: 100%;
      position: relative;
    }

    /* Card Header */
    .card-header {
      display: flex;
      align-items: flex-start;
      margin-bottom: 2rem;
    }

    .logo-container {
      margin-right: 0.5rem;
    }

    .logo {
      width: 64px;
      height: 64px;
      object-fit: contain;
    }

    .header-title {
      flex: 1;
      text-align: center;
      font-size: 1.25rem;
      font-weight: bold;
      color: #7b2d26;
      line-height: 1.25;
    }

    /* Photo area */
    .photo-container {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }

    .photo-placeholder {
      width: 8rem;
      height: 10rem;
      border: 1px dashed #8B4513;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #FFA500;
    }

    .photo-actual {
      width: 8rem;
      height: 10rem;
      object-fit: cover;
    }

    /* Form fields */
    .form-fields {
      margin-top: 1.5rem;
      position: relative;
    }

    .field-row {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .field-label {
      font-weight: bold;
      font-size: 1.125rem;
      width: 10rem;
    }

    .field-value {
      flex: 1;
      border-bottom: 2px dotted black;
      height: 1.5rem;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    /* Watermark - simplified for this example */
    .watermark {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.1;
      pointer-events: none;
      z-index: -1;
    }

    .watermark img {
      width: 80%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="card-container">
    <!-- Front of the card -->
    <div class="card">
      <div class="card-content">
        <div class="card-front">
          <div>
            <!-- Header with logo and title -->
            <div class="card-header">
              <div class="logo-container">
                <img src="{{logoUrl}}" alt="Logo" class="logo">
              </div>
              <div>
                <h1 class="header-title">
                  FARIDABAD DISTRICT BADMINTON<br>ASSOCIATION (REGD.)
                </h1>
              </div>
            </div>

            <!-- Photo area -->
            <div class="photo-container">
              <img src="{{photoUrl}}" alt="Player Photo" class="photo-actual">
            </div>

            <!-- Form fields -->
            <div class="form-fields">
              <div class="watermark">
                <img src="{{watermarkUrl}}" alt="Watermark">
              </div>

              <div class="field-row">
                <div class="field-label">NAME</div>
                <div class="field-value">{{playerName}}</div>
              </div>

              <div class="field-row">
                <div class="field-label">FATHER'S NAME</div>
                <div class="field-value">{{fatherName}}</div>
              </div>

              <div class="field-row">
                <div class="field-label">DATE OF BIRTH</div>
                <div class="field-value">{{dob}}</div>
              </div>

              <div class="field-row">
                <div class="field-label">FDBA ID</div>
                <div class="field-value">{{playerId}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back of the card -->
    <div class="card">
      <div class="card-content">
        <div class="card-back">
          <div>
            <!-- Header with logo and title -->
            <div class="card-header">
              <div class="logo-container">
                <img src="{{logoUrl}}" alt="Logo" class="logo">
              </div>
              <div>
                <h1 class="header-title">
                  FARIDABAD DISTRICT BADMINTON<br>ASSOCIATION (REGD.)
                </h1>
              </div>
            </div>

            <!-- Form fields -->
            <div class="form-fields">
              <div class="watermark">
                <img src="{{watermarkUrl}}" alt="Watermark">
              </div>

              <div class="field-row">
                <div class="field-label">ISSUE DATE</div>
                <div class="field-value">{{issuedAt}}</div>
              </div>

              <div class="field-row">
                <div class="field-label">VALID TILL</div>
                <div class="field-value">{{validUntil}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

export default function generateIdCardHtml(
    playerId: string,
    photoUrl: string,
    playerName: string,
    fatherName: string,
    dob: string,
    issuedAt: string,
    validUntil: string,
) {
    let cardTemplate = template;

    cardTemplate = cardTemplate
        .replace(
            /{{logoUrl}}/g,
            `https://manim-bot.s3.ap-south-1.amazonaws.com/logo-transparent.png`,
        )
        .replace(
            /{{watermarkUrl}}/g,
            `https://manim-bot.s3.ap-south-1.amazonaws.com/logo-transparent.png`,
        )
        .replace(/{{photoUrl}}/g, photoUrl || "")
        .replace(/{{playerName}}/g, playerName || "")
        .replace(/{{fatherName}}/g, fatherName || "")
        .replace(/{{dob}}/g, dob || "")
        .replace(/{{playerId}}/g, playerId || "")
        .replace(/{{issuedAt}}/g, issuedAt || "")
        .replace(/{{validUntil}}/g, validUntil || "");

    return cardTemplate;
}
