//
//
const UserProfile = (props) => {
  const { userName } = props;
  return (
    <>
      <h1>Server Side Props</h1>
      {userName}
    </>
  );
};

export default UserProfile;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  // We can get access to the full request object

  return {
    props: {
      userName: "Max",
    },
  };
};
