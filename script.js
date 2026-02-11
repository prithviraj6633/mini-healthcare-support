document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const supportType = document.getElementById("supportType").value;
  const message = document.getElementById("message").value;

  // Basic keyword detection (AI-style automation)
  let urgency = "Normal";

  const lowerMessage = message.toLowerCase();

  if (
    lowerMessage.includes("urgent") ||
    lowerMessage.includes("emergency") ||
    lowerMessage.includes("immediately") ||
    lowerMessage.includes("critical")
  ) {
    urgency = "High";
  }

  const summaryText = `
Patient Name: ${name}
Support Type: ${supportType}
Priority Level: ${urgency}

This request has been automatically categorized as ${urgency} priority.
The NGO team can review and respond accordingly.
  `;

  document.getElementById("summary").innerText = summaryText;
  document.getElementById("responseBox").classList.remove("hidden");

  document.getElementById("supportForm").reset();
});
