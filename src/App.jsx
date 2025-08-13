import { useState } from "react";
import {
  Group,
  Title,
  Button,
  Text,
  Paper,
  Stack,
  ActionIcon,
  ScrollArea,
  Card,
  Divider,
  Box,
} from "@mantine/core";
import {
  IconPlus,
  IconPhoto,
  IconX,
  IconChevronDown,
  IconUsers,
  IconFileText,
  IconShield,
  IconStar,
  IconFolder,
} from "@tabler/icons-react";
import "@tldraw/tldraw/tldraw.css";
import "./App.css";
import TldrawEditor from "./molecules/TldrawEditor";

function App() {
  const [activeSection, setActiveSection] = useState("Editors Tab");
  const [showOutline, setShowOutline] = useState(true);
  const [showLibrary, setShowLibrary] = useState(true);

  const outlineSections = [
    "Editors Tab",
    "AboutUs Tab",
    "Projects",
    "Testimonials",
    "Executive Summary",
  ];

  const libraryItems = [
    { name: "Disclaimer", icon: IconShield },
    { name: "Features", icon: IconStar },
    { name: "Media", icon: IconPhoto },
    { name: "Portfolio", icon: IconFolder },
    { name: "Testimonials", icon: IconUsers },
    { name: "Content", icon: IconFileText },
  ];

  return (
    <div className="app-container">
      <div
        className="top-bar"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div>Home</div>
        <div>About us</div>
        <div>Projects</div>
        <div>Testimonials</div>
        <div>Summary</div>
      </div>
      <div className="main-content">
        {showOutline && (
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
                  + Add Section
                </Button>
              </Stack>
            </ScrollArea>
          </div>
        )}
        <div className="content-area">
          <ScrollArea h="calc(100vh - 120px)" p="md">
            <Stack gap="lg">
              <div className="tldraw-editors-container">
                <Title order={3} mb="md">
                  Tldraw Editors
                </Title>
                <Stack gap="md">
                  <Paper withBorder p="md">
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                      }}
                    >
                      <TldrawEditor />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                      }}
                    >
                      <TldrawEditor />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                      }}
                    >
                      <TldrawEditor />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                      }}
                    >
                      <TldrawEditor />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                      }}
                    >
                      <TldrawEditor />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                      }}
                    >
                      <TldrawEditor />
                    </Box>
                  </Paper>
                </Stack>
              </div>
            </Stack>
          </ScrollArea>
        </div>
        {showLibrary && (
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
                    <Card
                      key={index}
                      withBorder
                      p="xs"
                      style={{ cursor: "pointer" }}
                    >
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
        )}
      </div>
    </div>
  );
}

export default App;
