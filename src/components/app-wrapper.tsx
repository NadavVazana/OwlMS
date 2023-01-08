import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { apiClient } from "../api/api-client";
import { metaItems } from "../atoms/meta-items";

export const AppWrapper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [meta, setMeta] = useRecoilState(metaItems);
  useEffect(() => {
    (async function fetch() {
      const meta = await apiClient.getMeta();
      setMeta(meta);
    })();
  }, [setMeta]);

  return <React.Fragment></React.Fragment>;
};
