import { TextField } from "@mui/material";

const Profile = () => {
  return (
    <div className="md:ml-[250px] px-2 mx-2 w-[400px]  mt-[20px] flex flex-col items-center">
      <div>
        <h1 className="text-5xl py-5">Profile</h1>
      </div>
      <div className="w-full flex m-10 justify-center">
        <img src="avatar.webp" className="w-60" alt="ProfileImage" />
      </div>

      <div className="w-full flex justify-center my-2">
        <TextField
          fullWidth
          disabled
          value="Vikas Chaudhari"
          label="Fullname"
          variant="outlined"
        />
      </div>
      <div className="w-full flex justify-center my-2">
        <TextField
          fullWidth
          disabled
          value="vikas79725@gmail.com"
          label="Email Address"
          variant="outlined"
        />
      </div>
      <div className="w-full flex justify-center my-2">
        <TextField
          fullWidth
          disabled
          value="7972584495"
          label="Phone number"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Profile;
