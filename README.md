# Anti-Corruption Detection App

This is a **React application** built with JavaScript to detect and analyze potential corruption scenarios using a fuzzy decision-making model. The app processes several attributes to assess corruption likelihood, providing a systematic and data-driven approach to decision-making.

## Features

- **Fuzzy Decision-Making Model**: Implements logic for assessing corruption probability based on fuzzy logic principles.
- **Core Attributes**:
  - **`rank`**: The rank or position of the individual being evaluated.
  - **`salary`**: The official salary of the individual.
  - **`bribeSize`**: The size of any reported bribes.
  - **`companyTransparencyLevel`**: A measure of the company's transparency.
  - **`companyCorruptionLevel`**: The perceived level of corruption in the company.
  - **`faith`**: A subjective measure of trust or belief in the individual.

## Tech Stack

- **Frontend**: React (JS/JSX)
- **Logic**: Fuzzy decision-making model implemented in JavaScript
- **State Management**: React class component for managing dynamic state changes
- **Build Tool**: Vite or Create React App (specify if needed)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Sterenchuk/corruption.git
   cd corruption
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Input Data**:
   - Enter details for each attribute (`rank`, `salary`, etc.) in the designated form fields.
   
2. **Run Analysis**:
   - Click the "Analyze" button to generate the corruption likelihood report.

3. **Review Results**:
   - Examine the output for insights and take appropriate actions.

## Contribution

We welcome contributions to improve the app! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes and push:
   ```bash
   git add .
   git commit -m "Add your commit message"
   git push origin feature-name
   ```
4. Open a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have questions, suggestions, or need support, feel free to open an issue.

---

Enjoy using the **Anti-Corruption Detection App** and help promote transparency and accountability! 😊