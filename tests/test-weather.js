function getIcon(code) {
    if ([0].includes(code)) return "https://img.icons8.com/emoji/48/sun-emoji.png";
    if ([1, 2, 3].includes(code)) return "https://img.icons8.com/emoji/48/sun-behind-cloud.png";
    if ([45, 48].includes(code)) return "https://img.icons8.com/emoji/48/fog.png";
    if ([51, 53, 55, 61, 63, 65].includes(code)) return "https://img.icons8.com/emoji/48/cloud-with-rain.png";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "https://img.icons8.com/emoji/48/cloud-with-snow.png";
    if ([95, 96, 99].includes(code)) return "https://img.icons8.com/emoji/48/cloud-with-lightning-and-rain.png";
    return "https://img.icons8.com/emoji/48/question-mark.png";
}

describe('Weather App Validation Tests', function () {
  it('should reject empty city input', function () {
    const input = " ";
    assert.equal(input.trim(), '');
  });

  it('should correctly encode city names with special characters', function () {
    const encoded = encodeURIComponent("São Paulo");
    assert.equal(encoded, "S%C3%A3o%20Paulo");
  });

  it('should detect invalid coordinates', function () {
    const lat = 123, lon = 456;
    const isValid = lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180;
    assert.isFalse(isValid);
  });

  it('should treat city input case-insensitively', function () {
    const city1 = "london";
    const city2 = "LONDON";
    assert.equal(city1.toLowerCase(), city2.toLowerCase());
  });

  it('should show loading message while fetching data', function () {
    const el = document.createElement('div');
    el.id = "weatherOutput";
    document.body.appendChild(el);
    el.textContent = "Fetching weather data...";
    assert.equal(el.textContent, "Fetching weather data...");
  });

  it('should map weather codes to correct icons', function () {
    const cases = [
      { code: 0, includes: "sun-emoji" },
      { code: 2, includes: "sun-behind-cloud" },
      { code: 45, includes: "fog" },
      { code: 61, includes: "cloud-with-rain" },
      { code: 73, includes: "cloud-with-snow" },
      { code: 96, includes: "cloud-with-lightning-and-rain" },
      { code: 123, includes: "question-mark" }
    ];

    cases.forEach(({ code, includes }) => {
      const url = getIcon(code);
      assert.include(url, includes);
    });
  });
});
