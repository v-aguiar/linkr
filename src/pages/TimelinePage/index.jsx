import { useState } from "react";
import MainScreen from "../../components/MainScreen";
import PublishPost from "../../components/Posts/PublishPost";

export default function TimelinePage() {
  const [refresh, setRefresh] = useState(false);
  console.log(refresh);
  return(
    <MainScreen route="/timeline" refresh={refresh} >
        <h1>timeline</h1>
        <PublishPost refresh={refresh} setRefresh={setRefresh} />
    </MainScreen>
  );
}
