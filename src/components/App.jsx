import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/users/userOperations";
import { selectEndOfList, selectisLoading, selectLimit, selectPage, selectUsers } from "redux/users/userSelectors";
import { setPageNumber } from "redux/users/userSlice";
import { Container } from "./Container/Container.styled";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton";
import UserCards from "./UserCard/UserCard";

export const App = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectisLoading);
  const limit = useSelector(selectLimit);
  const page = useSelector(selectPage);
  const endOfList = useSelector(selectEndOfList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users || !users.length) {
      dispatch(fetchUsers({ limit, page }));
    }
  }, [dispatch, users, page, limit]);

  const onLoadMoreBtnClick = () => {
    const nextPage = page + 1;
    dispatch(setPageNumber(nextPage));
    dispatch(fetchUsers({ limit, page: nextPage }));
  }
  
  return (
    <Container>
      <UserCards />
      {!endOfList && <LoadMoreButton onClick={onLoadMoreBtnClick} disabled={isLoading} />}
    </Container>
  );
};
