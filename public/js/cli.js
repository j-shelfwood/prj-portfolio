export default function cli() {
  return {
    command: "",
    output: [
      "Welcome to Joris Schelfhout's CLI Portfolio!",
      'Type "help" for available commands.',
    ],
    commands: {
      help: () => [
        "Available commands:",
        "- about: Display information about me",
        "- experience: Show my work experience",
        "- projects: List my past projects",
        "- skills: Display my skills",
        "- contact: Show my contact information",
        "- clear: Clear the screen",
      ],
      about: () => [
        "┌────────────────────────────────────────────┐",
        "│ Hi, I'm Joris Schelfhout                   │",
        "│ I'm a Web Developer passionate about       │",
        "│ creating tailored web-based solutions.     │",
        "│                                            │",
        "│ Enthusiastic and socially engaged,         │",
        "│ I thrive in complex domains and love       │",
        "│ working on innovative projects.            │",
        "└───────────────────────────��────────────────┘",
      ],
      experience: () => [
        "📋 Work Experience:",
        "",
        "🚀 Web Developer at SMIT. Digitaal Vakmanschap (Jul 2019 - Present)",
        "   • Developed B2B e-commerce platforms",
        "   • Automated administrative processes in the pharmaceutical industry",
        "   • Managed client communication and development responsibilities",
        "",
        "💡 Guest Lecturer at Horizon College (Nov 2018 - Jun 2019)",
        "   • Created and taught Laravel & Vue.js curriculum",
        "   • Conducted workshops on modern web development",
        "",
        "🌱 Web Developer at SMIT. Digitaal Vakmanschap (Sep 2018 - Oct 2018)",
        "   • Fixed production bugs and responded to issues",
        "   • Translated project leads into actionable plans",
        "   • Discussed and designed new features with clients",
        "",
        "🎤 Conference Manager (Volunteer) at Human Music (2017 - Present)",
        "   • Managed crowd, venue, and speakers at tech conferences like Laracon EU",
        "",
        "💼 Intern Web Developer at Pieter Smit Media B.V (Feb 2017 - Aug 2017)",
        "   • Built custom applications using Vue.js and Laravel",
        "",
        "🔧 Web Developer at Pneunet Multitechniek Pneumatics (Jan 2016 - Present)",
        "   • Developed tools for data logging and production cost insights",
        "   • Enabled 24/7 monitoring for defective machine lines",
        "   • Prevented production line failures",
      ],
      projects: () => [
        "🛠️ Past Projects:",
        "",
        "🛒 B2B E-commerce Platform for SMIT.",
        "   • Custom-built solutions for various industries",
        "   • Focus on user experience and scalability",
        "",
        "📊 Data Logging Tool for Pneunet Multitechniek Pneumatics",
        "   • Provided real-time monitoring and cost analysis",
        "",
        "🌐 Laravel & Vue.js Curriculum for Horizon College",
        "   • Designed comprehensive learning material",
        "   • Successfully prepared students for their exams",
      ],
      skills: () => [
        "🔧 Skills:",
        "",
        "💻 Programming:",
        "   JavaScript ████████░░ 80%",
        "   PHP        ███████░░░ 70%",
        "   Vue.js     ████████░░ 80%",
        "",
        "🌐 Web Technologies:",
        "   HTML/CSS   █████████░ 90%",
        "   Laravel    ███████░░░ 70%",
        "",
        "🛠️ Tools:",
        "   Git        █████████░ 90%",
        "   Docker     ███████░░░ 70%",
        "   AWS        ██████░░░░ 60%",
        "",
        "🤝 Soft Skills:",
        "   Team Leadership",
        "   Project Management",
        "   Problem Solving",
      ],
      contact: () => [
        "📫 Contact Information:",
        "",
        "📧 Email:    joris@shelfwood.co",
        "🔗 LinkedIn: linkedin.com/in/%F0%9F%9B%A0joris-schelfhout-53465a10b",
        "🐦 Twitter:  @J_Shelfwood",
      ],
      clear: function () {
        this.output = [];
        return ['Screen cleared. Type "help" for available commands.'];
      },
    },
    executeCommand() {
      const cmd = this.command.toLowerCase().trim();
      const newOutput = ["$ " + this.command];

      if (this.commands[cmd]) {
        newOutput.push(...this.commands[cmd]());
      } else {
        newOutput.push(
          'Command not found. Type "help" for available commands.'
        );
      }

      this.output = [...this.output, ...newOutput];
      this.command = "";
      this.$nextTick(() => {
        const outputElement = document.getElementById("output");
        outputElement.scrollTop = outputElement.scrollHeight;
      });
    },
  };
}
