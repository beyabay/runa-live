import React, { memo } from "react";
import { Link } from "@chakra-ui/react";

const CreditText = () => {
  return (
    <Link
      href="https://chiya.dev"
      isExternal
      position="absolute"
      right={12}
      bottom={2}
      color="blue.300"
      fontSize={10}
    >
      credit
    </Link>
  );
};

export default memo(CreditText);
