// Define a type for the user data structure if not already defined
interface UserData {
  // Define the properties of a user
  userId: number;
  username: string;
  email: string;
  password: string;
  dob: string;
  assessmentSubmitted: boolean;
  picture: string;
}

export const fetchUsers = async (currentPage: number): Promise<UserData[]> => {
  const res = await fetch(`http://localhost:3000/api/users?page=${currentPage}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
  }
  const data: UserData[] = await res.json();
  return data;
};
