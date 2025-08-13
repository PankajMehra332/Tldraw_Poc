import React from "react";
import {
  ActionIcon,
  Button,
  Group,
  Paper,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { IconPlus, IconX } from "@tabler/icons-react";

const OutLine = ({setShowOutline, setActiveSection, activeSection}) => {
  const outlineSections = [
    "Editors Tab",
    "AboutUs Tab",
    "Projects",
    "Testimonials",
    "Executive Summary",
  ];
  return (
    <div className="left-sidebar">
      <div className="sidebar-header">
        <Text fw={500} size="sm">
          OUTLINE
        </Text>
        <ActionIcon
          variant="subtle"
          size="sm"
          onClick={() => setShowOutline(false)}
        >
          <IconX size={16} />
        </ActionIcon>
      </div>
      <ScrollArea h="calc(100vh - 120px)">
        <Stack gap="xs" p="md">
          {outlineSections.map((section, index) => (
            <Paper
              key={index}
              p="xs"
              withBorder
              style={{
                backgroundColor:
                  activeSection === section
                    ? "var(--mantine-color-violet-0)"
                    : "transparent",
                cursor: "pointer",
              }}
              onClick={() => setActiveSection(section)}
            >
              <Group justify="space-between">
                <Text size="sm">{section}</Text>
              </Group>
            </Paper>
          ))}
          <Button
            variant="light"
            size="sm"
            leftSection={<IconPlus size={14} />}
          >
            Add Section
          </Button>
        </Stack>
      </ScrollArea>
    </div>
  );
};

export default OutLine;
