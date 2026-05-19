import "./App.css";

function Student(props) {
  return (
    <div className="student-card">
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Marks:</strong> {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Student Information</h1>

      <Student
        name="Atisha"
        course="B.Tech CSE"
        marks="92"
      />

      <Student
        name="Rahul"
        course="BCA"
        marks="88"
      />

      <Student
        name="Priya"
        course="MCA"
        marks="95"
      />
    </div>
  );
}

export default App;