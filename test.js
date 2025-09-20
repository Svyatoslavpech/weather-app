function testGetIcon() {
    const tests = [
        { code: 0, expected: "sun-emoji" },
        { code: 1, expected: "sun-behind-cloud" },
        { code: 45, expected: "fog" },
        { code: 61, expected: "cloud-with-rain" },
        { code: 73, expected: "cloud-with-snow" },
        { code: 96, expected: "cloud-with-lightning-and-rain" },
        { code: 999, expected: "question-mark" }
    ];

    for (const test of tests) {
        const iconUrl = getIcon(test.code);
        const result = iconUrl.includes(test.expected) ? "PASS" : "FAIL";
        console.log(`Code ${test.code}: ${result}`);
    }
}

testGetIcon();
