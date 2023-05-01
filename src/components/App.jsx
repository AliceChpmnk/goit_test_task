import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/users/userOperations";
import { selectUsers } from "redux/users/userSelectors";
// import { setPageNumber } from "redux/users/userSlice";
// import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import UserCards from "./UserCard/UserCard";

export const App = () => {
  const users = useSelector(selectUsers);
  const {
    // isLoading,
    limit,
    page } = useSelector(selectUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!users || !users.length) {
      dispatch(fetchUsers({ limit, page }));
    }
  }, [dispatch, users, page, limit]);

  // const onLoadMoreBtnClick = () => {
  //   dispatch(setPageNumber(page + 1));
  // }
  
  return (
    <div>
      <UserCards />
      {/* <LoadMoreButton onClick={onLoadMoreBtnClick} disabled={isLoading} /> */}
    </div>
  );
};
