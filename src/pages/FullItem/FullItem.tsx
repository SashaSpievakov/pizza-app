import { useParams } from "react-router-dom";

import FullItemBlock from "../../components/FullItem/FullItem";
import Loading from "../../components/UI/Loading/Loading";
import itemAPI from "../../services/ItemService";
import Error from "./FullItem.styled";

const FullItem = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, error } = itemAPI.useFetchItemQuery(
    id as string,
    {
      refetchOnFocus: true,
    },
  );

  return isSuccess ? (
    <FullItemBlock item={data} />
  ) : isLoading ? (
    <Loading />
  ) : (
    <Error>Eroor: {JSON.stringify(error)}</Error>
  );
};
export default FullItem;
