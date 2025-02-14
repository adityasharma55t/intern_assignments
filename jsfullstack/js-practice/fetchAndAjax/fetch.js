// Async function to fetch GitHub user data
async function fetchGitHubUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`User not found: ${response.status}`);
    }

    const user = await response.json();

    console.log("GitHub User:", user);
    console.log("Name:", user.name);
    console.log("Bio:", user.bio);
    console.log("Public Repos:", user.public_repos);
    console.log("Profile URL:", user.html_url);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Example usage
fetchGitHubUser("adityasharma55t");
