import React, { memo } from "react";
import { Icon, Link, Wrap, WrapItem } from "@chakra-ui/react";
import { FaDiscord, FaEnvelope, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";

const LinkList = () => {
  return (
    <Wrap
      position="absolute"
      color="white"
      spacing={4}
      bottom={0}
      w="full"
      px={12}
      py={8}
      justify="flex-end"
      transition="all 0.15s ease-out"
    >
      <IconLink icon={FaGithub} name="GitHub" href="https://github.com/Runabox" />
      <IconLink icon={FaTwitter} name="Twitter" href="https://twitter.com/Runabox1" />
      <IconLink icon={FaTwitch} name="Twitch" href="https://twitch.tv/Runabox" />
      <IconLink icon={FaDiscord} name="Runabox#0001" href="https://discord.gg/SuMenydzg5" />
      <IconLink icon={FaEnvelope} name="Email" href="mailto:runa@runa.live" />
    </Wrap>
  );
};

const IconLink = ({ icon, href }: { icon: any; name: string; href: string }) => {
  return (
    <WrapItem>
      <Link href={href}>
        <Icon as={icon} fontSize="2xl" />
      </Link>
    </WrapItem>
  );
};

export default memo(LinkList);
