// Sample questions for topics
const questions = {
    "algorithms": [
        "Explain the concept of recursion.",
        "What is the time complexity of a binary search algorithm?",
        "Solve the problem: Find the largest subarray sum."
    ],
    "data-structures": [
        "What are the differences between a stack and a queue?",
        "Explain how a binary search tree works.",
        "Implement a linked list in JavaScript."
    ],
    "system-design": [
        "Design a URL shortening service.",
        "How would you scale a messaging application?",
        "What are the trade-offs of using a NoSQL database?"
    ]
};

// Handle form submission
document.getElementById('question-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const topic = document.getElementById('topic').value;
    const container = document.getElementById('questions-container');

    // Clear previous questions
    container.innerHTML = "";

    if (questions[topic]) {
        questions[topic].forEach((q, index) => {
            const questionEl = document.createElement('p');
            questionEl.textContent = `${index + 1}. ${q}`;
            container.appendChild(questionEl);
        });
    } else {
        container.textContent = "No questions available for the selected topic.";
    }
});
