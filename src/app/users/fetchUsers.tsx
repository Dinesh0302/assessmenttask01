export const fetchUsers = async (currentPage : any) => {
  const res = await fetch(`http://localhost:3000/api/users?page=${currentPage}`);
  if (!res.ok) {
    throw new Error('Failed to fetch user data');
 }
 return res.json();
}