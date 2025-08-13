import React from "react";
import {
  ActionIcon,
  Card,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import {
  IconPhoto,
  IconUsers,
  IconFileText,
  IconShield,
  IconStar,
  IconFolder,
} from "@tabler/icons-react";

const Library = ({setShowLibrary}) => {
   const libraryItems = [
    { name: "Disclaimer", icon: IconShield },
    { name: "Features", icon: IconStar },
    { name: "Media", icon: IconPhoto },
    { name: "Portfolio", icon: IconFolder },
    { name: "Testimonials", icon: IconUsers },
    { name: "Content", icon: IconFileText },
  ];
  return (
    <div className="right-sidebar">
      <div className="sidebar-header">
        <Text fw={500} size="sm">
          Library
        </Text>
        <ActionIcon
          variant="subtle"
          size="sm"
          onClick={() => setShowLibrary(false)}
        >
          <IconX size={16} />
        </ActionIcon>
      </div>
      <ScrollArea h="calc(100vh - 120px)">
        <Stack gap="md" p="md">
          <div className="library-grid">
            {libraryItems.map((item, index) => (
              <Card key={index} withBorder p="xs" style={{ cursor: "pointer" }}>
                <Stack align="center" gap="xs">
                  <ActionIcon variant="light" size="lg">
                    <item.icon size={20} />
                  </ActionIcon>
                  <Text size="xs" ta="center">
                    {item.name}
                  </Text>
                </Stack>
              </Card>
            ))}
          </div>

          <Divider />

          <div>
            <Group justify="space-between" mb="xs">
              <Text size="sm" fw={500}>
                Version History
              </Text>
              <ActionIcon variant="subtle" size="sm">
                <IconChevronDown size={16} />
              </ActionIcon>
            </Group>
            <Text size="xs" c="dimmed">
              No previous versions
            </Text>
          </div>
        </Stack>
      </ScrollArea>
    </div>
  );
};

export default Library;
