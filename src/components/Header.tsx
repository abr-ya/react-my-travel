import { Typography, Button } from "@abr-ya/lib-travel-kit-demo";
import React from "react";
import { FiStar } from "react-icons/fi";

export const Header = () => (
  <div className="flex flex-col justify-between md:flex-row">
    <div>
      <Typography variant="h5" customWeight="medium">
        109 stays in Amsterdam
      </Typography>

      <Typography variant="lg" customColor="text-gray-500 dark:text-gray-300">
        Book your next stay at one of our properties.
      </Typography>
    </div>

    <div className="flex mt-6 space-x-4 md:mt-0">
      <Button size="sm" variant="secondaryGray">
        Share
      </Button>

      <Button size="sm" LeadingIcon={<FiStar size={20} />} variant="primary">
        Save search
      </Button>
    </div>
  </div>
);
