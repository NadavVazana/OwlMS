import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { apiClient } from "../api/api-client";
import { metaItems } from "../atoms/meta-items";

export const AppWrapper = () => {
  const [meta, setMeta] = useRecoilState(metaItems);
  useEffect(() => {
    (async function fetch() {
      const meta = await apiClient.getMeta();

      setMeta(meta);
    })();
  }, []);

  return <React.Fragment></React.Fragment>;
};
