console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
const startButton = document.getElementById("startButton");

    document.getElementById("homeScreen").classList.remove("hidden");

    document.getElementById("testScreen").classList.add("hidden");
    document.getElementById("sectionScreen").classList.add("hidden");
    document.getElementById("resultScreen").classList.add("hidden");
});

const questions = [
    {
        question: "A delivery system always chooses the nearest next destination. What is the biggest weakness of this approach when minimizing total distance traveled? (easy)",
        answers: [
            "More expensive orders should be prioritized to maximize revenue.",
            "Earlier orders should be prioritized first to ensure customer satisfaction.",
            "The system may visit the same area repeatedly, causing inefficiency.",
            "The shortest local and global paths may be different."
        ],
        correct: 3,
        section: "ar"
    },

    {
        question: `A server for a popular online game processes logins, players joining, and datastore updates. Datastore updates and player logins can not be processed simultaneously.

        What prioritization strategy would most likely maximize total completed requests over time? (hard)`,
        answers: [
            "Prioritize datastore updates. These are most likely to get blocked if the server is processing logins, so whenever processing these requests becomes possible this should immediately be the priority.",
            "Prioritize players joining the game. This isn’t tied to other processes, like logins or datastore updates, so it should be prioritized.",
            "Prioritize logins. If logins are unprocessed, datastore updates can’t be processed, so they act like a bottleneck and should be addressed first.",
            "Don’t prioritize based on request type. Instead prioritize earlier requests to reduce latency and ensure the best user experience."
        ],
        correct: 2,
        section: "ar"
    },
        {
        question: `A program tracks grades for students at the end of the year. The following conditions describe how this program operates, in sequential order.

        A variable is created that sets a student’s base grade to 85.

        An extra credit variable is set to 5.

        Add the extra credit variable to the base grade.

        Multiply the final grade by 0.9 to account for a downward curve.

        What is this student’s final grade? (easy)`,
        answers: [
            "85",
            "81",
            "90",
            "90.9"
        ],
        correct: 1,
        section: "ar"
    },
        {
        question: `A customer service program processes requests based on the order of their arrival. The earliest request is always prioritized first. Some requests take seconds while others take hours. This system’s goal is to process the largest number of requests in the shortest time possible. 

        What is the biggest downside of this system? (medium)`,
        answers: [
            "Smaller requests aren’t prioritized over larger requests, which reduces the number of requests the program can process.",
            "This program works as intended. Every request will be processed eventually, so the net runtime will always be the same.",
            "Longer requests should always be prioritized first to prevent backlog growth.",
            "This program works as intended. Prioritizing early requests first prevents outlier high wait times."
        ],
        correct: 0,
        section: "ar"
    },
            {
        question: `A company combines multiple services into one shared system to simplify communication. 

        What is the biggest risk of this approach? (medium)`,
        answers: [
            "Streamlining communication will put a bigger load on company servers.",
            "Shared resources may become more difficult to scale efficiently.",
            "A single failure can cause the whole system to fail.",
            "This change is fine. Simpler communication means less potential for error, improving overall stability."
        ],
        correct: 2,
        section: "ar"
    },
    {
        question: `A company divides a computational task among many workers to reduce completion time. As more workers are added, communication between workers becomes increasingly expensive.

        What is the most likely effect on total completion time? (hard)`,
        answers: [
            "Total completion time eventually stops improving significantly or becomes worse.",
            "Net completion time gains from adding workers always outweigh additional communication costs.",
            "Communication delays increase, reducing the efficiency of additional workers.",
            "Additional workers always reduce total completion time proportionally."
        ],
        correct: 0,
        section: "ar"
    },
    {
        question: `A video platform distributes uploads across multiple servers to improve performance. After adding additional upload servers, overall upload speed improves only slightly.

        Investigation shows:

        upload servers spend most of their time waiting before processing can continue

        CPU usage on upload servers remains low

        requests frequently depend on access to shared account data

        Which change would most likely improve total system performance? (hard)`,
        answers: [
            "Add more upload servers",
            "Reduce the time required to access shared account data",
            "Increase the size of uploaded video files",
            "Prioritize uploads based on file size"
        ],
        correct: 1,
        section: "ar"
    },
    {
        question: `A system stores data on user account ages. This system must support frequent insertion of new users and be able to efficiently sort users into permission levels based on account age. (For example, quickly returning a list of users with accounts between 6 and 12 months old). Which data structure can best accomplish this task? (medium)`,
        answers: [
            "Hash table.",
            "Heap",
            "Binary Search Tree (BST)",
            "Sorted Array"
        ],
        correct: 2,
        section: "ds"
    },
    {
        question: `A program uses a fast and slow pointer to traverse a linked list. The two pointers eventually meet. What can be concluded? (medium)`,
        answers: [
            "The list contains a cycle",
            "The list is sorted",
            "The list has duplicate values",
            "The list is empty"
        ],
        correct: 0,
        section: "ds"
    },
    {
        question: `Which data structure processes elements in “first in, first out” order? (easy)`,
        answers: [
            "Stack",
            "Heap",
            "Queue",
            "Hash table"
        ],
        correct: 2,
        section: "ds"
    },
    {
        question: `A system frequently accesses elements by index but rarely inserts or deletes elements. Which structure is best? (medium)`,
        answers: [
            "Linked List",
            "Array",
            "Heap",
            "Queue"
        ],
        correct: 1,
        section: "ds"
    },
    {
        question: `A poorly designed hash function causes many keys to map to the same index. What is the most likely impact? (medium)`,
        answers: [
            "Lookup performance remains O(1) regardless",
            "Lookup degrades toward O(n)",
            "Insert operations become impossible",
            "The data structure automatically rebalances itself"
        ],
        correct: 1,
        section: "ds"
    },
    {
        question: `You need to find the 10 largest elements from a stream of 1 million numbers. Which approach is most efficient? (medium)`,
        answers: [
            "Sort all numbers and take the last 10",
            "Use a min-heap of size 10",
            "Store all numbers in a linked list",
            "Use linear search repeatedly"
        ],
        correct: 1,
        section: "ds"
    },
    {
        question: `A system continuously receives new product prices and must support:

        Fast insertion of new prices

        Efficient retrieval of the smallest price

        Efficient checking of whether a specific price already exists

        Which approach is most appropriate? (hard)`,
        answers: [
            "A min-heap combined with a sorted array",
            "A min-heap only",
            "A hash table only",
            "A min-heap combined with a hash table"
        ],
        correct: 3,
        section: "ds"
    },
        {
        question: `A web application repeatedly loads the same user profile data from disk, causing slow response times.

        Which change would most likely improve performance without changing functionality? (medium)`,
        answers: [
            "Increase disk size",
            "Use caching",
            "Cap the number of requests for each user profile",
            "Increase file size"
        ],
        correct: 1,
        section: "s"
    },
    {
        question: `A multithreaded application occasionally produces inconsistent results when updating shared data.

        What is the most likely cause? (hard)`,
        answers: [
            "Network bandwidth limitations",
            "Race conditions",
            "Disk fragmentation",
            "Binary search degradation"
        ],
        correct: 1,
        section: "s"
    },
    {
        question: `A program needs to complete an independent task where shared memory is unnecessary and reliability is prioritized over communication speed. 

        Which approach would be most appropriate? (medium)`,
        answers: [
            "Use a separate process. Processes are isolated which reduces synchronization issues.",
            "Use threads since they improve stability by checking each others’ outputs.",
            "Use a separate process, since fewer lines of code are required, reducing the probability of bugs.",
            "Use both a separate process and threads to gain the advantages of both methods."
        ],
        correct: 0,
        section: "s"
    },
    {
        question: `What is the difference between RAM and Disk space? (easy)`,
        answers: [
            "RAM handles long term storage, while disk space is temporary and used for active programs.",
            "RAM is the primary storage space, and disk space acts as an overflow for additional data.",
            "Disk space is tied to the computer itself, while RAM is stored on the internet.",
            "RAM handles temporary storage and active programs, while disk space handles long term storage."
        ],
        correct: 3,
        section: "s"
    },
    {
        question: `A multiplayer game needs to reduce the time between a player pressing a button and the game responding. Which change would best achieve this goal? (easy)`,
        answers: [
            "Increase bandwidth.",
            "Decrease latency.",
            "Cache more data.",
            "Replace threads with processes."
        ],
        correct: 1,
        section: "s"
    },
    {
        question: `A program frequently accesses large amounts of data which must be available for immediate use. Which upgrade would most directly improve this ability? (medium)`,
        answers: [
            "Upgrading RAM",
            "Increasing disk storage capacity.",
            "Optimizing data queries",
            "Increasing CPU speed"
        ],
        correct: 0,
        section: "s"
    },
    {
        question: `A web application experiences slow response times during peak traffic. Investigation shows:

        CPU usage remains low

        Requests spend most of their time waiting for database operations to complete

        Requests for the same data are rarely repeated

        Which change would most likely improve performance? (hard)`,
        answers: [
            "Upgrade the application server CPU",
            "Add caching for frequently requested data",
            "Optimize database queries",
            "Increase the number of web servers"
        ],
        correct: 2,
        section: "s"
    },
{
    question: "What is the value of x after this program runs? (easy)",
    code: `x = 0

WHILE x < 10:
    x = x - 1`,
    answers: [
        "-10",
        "10",
        "0",
        "This program loops infinitely"
    ],
    correct: 3,
    section: "cc"
},

{
    question: "What is printed? (easy)",
    code: `score = 10

score = score + 5

score = score * 2

PRINT score`,
    answers: [
        "15",
        "20",
        "25",
        "30"
    ],
    correct: 3,
    section: "cc"
},

{
    question: "What is printed? (medium)",
    code: `x = 1

WHILE x < 10:
    x = x * 2

PRINT x`,
    answers: [
        "8",
        "10",
        "16",
        "Infinite Loop"
    ],
    correct: 2,
    section: "cc"
},

{
    question: "What is printed? (medium)",
    code: `count = 0

FOR i FROM [1 TO 3]:
    count = count + 1

FOR i FROM [1 TO 2]:
    count = count * 2

PRINT count`,
    answers: [
        "5",
        "6",
        "8",
        "12"
    ],
    correct: 3,
    section: "cc"
},

{
    question: "What is the most likely outcome? (medium)",
    code: `x = 0

WHILE x < 5:
    x = x - 1

PRINT x`,
    answers: [
        "The program prints 5",
        "The program prints -5",
        "The loop runs forever",
        "The loop executes once"
    ],
    correct: 2,
    section: "cc"
},

{
    question: "What is printed? (hard)",
    code: `total = 0

FOR i FROM [1 TO 3):
    total = total + i

IF total > 3:
    total = 0

PRINT total`,
    answers: [
        "0",
        "3",
        "5",
        "6"
    ],
    correct: 1,
    section: "cc"
},

{
    question: "What is printed? (hard)",
    code: `x = 5

FUNCTION update(value):
    value = value + 3

update(x)

PRINT x`,
    answers: [
        "5",
        "8",
        "3",
        "An error occurs"
    ],
    correct: 0,
    section: "cc"
},
];

const sections = [
    {
        name: "Analytical Reasoning",
        description: "This section evaluates your ability to reason through computational and systems-oriented problems. Questions focus on optimization, constraints, dependencies, tradeoffs, and identifying the most effective solutions under different conditions."
    },
    {
        name: "Data Structures and Algorithms",
        description: "This section evaluates your understanding of common data structures, algorithms, and their tradeoffs. Questions focus on selecting efficient approaches under different constraints, reasoning about performance, and understanding how various structures behave in practical scenarios."
    },
    {
        name: "Systems",
        description: "This section evaluates your understanding of how computer systems manage resources, communication, and performance. Questions focus on concepts such as memory, processes, concurrency, scaling, bottlenecks, and system stability."
    },
    {
        name: "Code Comprehension",
        description: `This section evaluates your ability to mentally simulate and understand program behavior using pseudocode. Questions focus on execution flow, loops, conditionals, state changes, debugging logic, and predicting program output.

        Pseudocode Conventions
        Ranges use interval notation. For example from (1 to 3] does not include 1 but does include 3.
        Variables update sequentially
        Assume standard execution flow unless stated otherwise
        Variables are passed by reference unless otherwise stated.
        Assume loops terminate if condition becomes false after update`
    }
];

const sectionScores = {
  ar: 0,
  ds: 0,
  s: 0,
  cc: 0,
};

const TRANSITION_TIME = 250;

let currentQuestion = 0;
let currentSectionIndex = 0;
let score = 0;
let scoreStrength = null;

let selectedAnswer = null;
let previousSection = "ar";

let supabaseUrl = "https://qhihhbdhlpowflzfdoqo.supabase.co";
let supabaseKey = "sb_publishable_dlNHRTBRY2F3WvMiLc9iug_iokeJBLR";

const supabaseClient = supabase.createClient(
    supabaseUrl,
    supabaseKey);

console.log("Supabase client created");

const questionEl = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");

function switchScreen(fromScreen, toScreen, callback) {

    fromScreen.classList.add("fade-out");

    setTimeout(() => {

        fromScreen.classList.add("hidden");
        fromScreen.classList.remove("fade-out");

        toScreen.classList.remove("hidden");

        // start hidden
        toScreen.classList.add("fade-out");

        // force reflow
        void toScreen.offsetWidth;

        // fade in
        toScreen.classList.remove("fade-out");

        activeScreen = toScreen;

        if (callback) callback();

    }, TRANSITION_TIME);
}

function loadQuestion(animated = true) {

    if (!questions[currentQuestion]) return;

    const card = document.querySelector(".test-card");
    const question = questions[currentQuestion];

    updateProgressBar();

    function populateQuestion() {

        questionEl.textContent = question.question;

        const codeBlock = document.getElementById("codeBlock");

if (question.code) {
    codeBlock.textContent = question.code;
    codeBlock.classList.remove("hidden");
} else {
    codeBlock.textContent = "";
    codeBlock.classList.add("hidden");
}

        answerButtons.innerHTML = "";

        question.answers.forEach((answer, index) => {

            const button = document.createElement("button");

            button.textContent = answer;
            button.classList.add("answer-btn");

            button.addEventListener("click", () => {

                Array.from(answerButtons.children).forEach(btn => {
                    btn.style.backgroundColor = "";
                });

                button.style.backgroundColor = "lightblue";

                selectedAnswer = index;
            });

            answerButtons.appendChild(button);
        });
    }

    // FIRST LOAD: no animation
    if (!animated) {

        card.classList.remove("card-hidden");

        populateQuestion();

        return;
    }

    // NORMAL QUESTION TRANSITIONS
    card.classList.add("card-hidden");

    setTimeout(() => {

        populateQuestion();

        card.classList.remove("card-hidden");

    }, TRANSITION_TIME);
}
function showScreen(screenToShow) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.add("hidden");
    });

    screenToShow.classList.remove("hidden");
}

startButton.addEventListener("click", function () {
        console.log("START BUTTON CLICKED");
    switchScreen(screens.home, screens.section, () => {
        showSection(0);
    });
});

function showSection(index) {

    const section = sections[index];

    document.getElementById("sectionTitle").textContent = section.name;
    document.getElementById("sectionDescription").textContent = section.description;
}

function getCurrentSection() {
    return questions[currentQuestion].section;
}

function findBestCategory() {
let strongestCategory = null;
let highestScore = -Infinity;

for (const [section, score] of Object.entries(sectionScores)) {
  if (score > highestScore) {
    highestScore = score;
    strongestCategory = section;
  }
}
return strongestCategory;
}

function updateProgressBar() {

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");

    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = progressPercent + "%";

    progressText.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;
}

function showResults() {
    const scoreText = document.getElementById("scoreText");
    const performanceText = document.getElementById("performanceText");
    const categoryResults = document.getElementById("categoryResults");
    const recommendationText = document.getElementById("recommendationText");

    scoreText.textContent = `${score}/${questions.length}`;

    if (score > 25) {
        performanceText.textContent = "Very strong overall performance.";
    } else if (score > 20) {
        performanceText.textContent = "Strong overall performance.";
    } else if (score > 15) {
        performanceText.textContent = "Average overall performance.";
    } else {
        performanceText.textContent = "Beginner level overall performance.";
    }

    const categoryNames = {
        ar: "Analytical Reasoning",
        ds: "Data Structures & Algorithms",
        s: "Systems",
        cc: "Code Comprehension"
    };

    categoryResults.innerHTML = "";

    for (const [key, value] of Object.entries(sectionScores)) {
        const percent = (value / 7) * 100;

        const row = document.createElement("div");
        row.classList.add("category-row");

        row.innerHTML = `
            <div class="category-label">
                <span>${categoryNames[key]}</span>
                <span>${value} / 7</span>
            </div>

            <div class="category-bar-bg">
                <div class="category-bar-fill" style="width: ${percent}%"></div>
            </div>
        `;

        categoryResults.appendChild(row);
    }

    const weakestCategory = Object.entries(sectionScores)
        .sort((a, b) => a[1] - b[1])[0][0];

    recommendationText.textContent =
        `Recommended focus: ${categoryNames[weakestCategory]}.`;
}

const screens = {
    home: document.getElementById("homeScreen"),
    test: document.getElementById("testScreen"),
    section: document.getElementById("sectionScreen"),
    result: document.getElementById("resultScreen"),
    leaderboard: document.getElementById("leaderboardScreen")
};

let activeScreen = screens.home;

document.getElementById("nextButton")
.addEventListener("click", function() {
    console.log("Button clicked");
    if (selectedAnswer === null) {
    alert("Please select an answer.");
    return;
}
    if (selectedAnswer === questions.at(currentQuestion).correct) {
    score++;
    console.log(questions.at(currentQuestion).section)
    sectionScores[questions.at(currentQuestion).section] += 1;
    console.log("Correct");
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        selectedAnswer = null;
    }
    else {
    switchScreen(screens.test, screens.result, showResults);
    return;
    }
    const newSection = getCurrentSection();
console.log("Previous:", previousSection);
console.log("New:", newSection);
console.log("Current Question:", currentQuestion);

    if (newSection !== previousSection) {
        previousSection = newSection;
        currentSectionIndex++
switchScreen(screens.test, screens.section, () => {
    showSection(currentSectionIndex);
});

        return;
    }
});

document.getElementById("continueButton")
.addEventListener("click", function() {
    switchScreen(screens.section, screens.test, () => {
        loadQuestion(false);
    });
});

document.getElementById("restartButton")
.addEventListener("click", function() {

    currentQuestion = 0;
    currentSectionIndex = 0;
    previousSection = "ar";

    score = 0;
    selectedAnswer = null;

    sectionScores.ar = 0;
    sectionScores.ds = 0;
    sectionScores.s = 0;
    sectionScores.cc = 0;

    switchScreen(screens.result, screens.home);
});

document.getElementById("navQuiz")
.addEventListener("click", () => {
    switchScreen(activeScreen, screens.home);
});

document.getElementById("navLeaderboard")
.addEventListener("click", () => {
    switchScreen(activeScreen, screens.leaderboard);
});

