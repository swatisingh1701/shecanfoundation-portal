import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SubmissionCard from "../components/SubmissionCard";

import { getSubmissions } from "../utils/storage";

function Admin({ darkMode, setDarkMode }) {
  const [submissions, setSubmissions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const refreshData = () => {
    setSubmissions(getSubmissions());
  };

  const filteredSubmissions = submissions.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="admin-container">
        <div className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <p>Manage all form submissions.</p>
        </div>

        <div className="stats-card">
          <h2>Total Submissions</h2>
          <span>{submissions.length}</span>
        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="submission-grid">
          {filteredSubmissions.length > 0 ? (
            filteredSubmissions.map((submission) => (
              <SubmissionCard
                key={submission.id}
                submission={submission}
                refresh={refreshData}
              />
            ))
          ) : (
            <div className="empty-state">
              No submissions found.
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;