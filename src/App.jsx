import { useState, useRef } from "react";
import {
  Group,
  Title,
  Button,
  Text,
  Paper,
  Stack,
  ActionIcon,
  Box,
  ScrollArea,
  Card,
  Divider,
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
import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import "./App.css";
import { components, textOptions, UiOverRides } from "./tldraw.constant";
import extensionFontFamilies from "./fonts";

function App() {
  const [activeSection, setActiveSection] = useState("Editors Tab");
  const [showOutline, setShowOutline] = useState(true);
  const [showLibrary, setShowLibrary] = useState(true);
  const [activeEditor, setActiveEditor] = useState(null);

  const editorRefs = useRef({});

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

  const handleEditorFocus = (editorId) => {
    setActiveEditor(editorId);
  };

  const handleEditorMount = (editorId, editor) => {
    editorRefs.current[editorId] = editor;
  };

  const exoFont = extensionFontFamilies["'Exo 2'"].normal.normal.src.url;

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
                    <Text fw={500} mb="md">
                      Editor 1
                    </Text>
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                        borderColor:
                          activeEditor === "editor1"
                            ? "var(--mantine-color-blue-5)"
                            : "var(--mantine-color-gray-3)",
                      }}
                      onClick={() => handleEditorFocus("editor1")}
                    >
                      <Tldraw
                        components={components}
                        textOptions={textOptions}
                        overrides={UiOverRides}
                        assetUrls={{
                          fonts: {
                            tldraw_mono: exoFont,
                          },
                        }}
                        onMount={(editor) =>
                          handleEditorMount("editor1", editor)
                        }
                      />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Text fw={500} mb="md">
                      Editor 2
                    </Text>
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                        borderColor:
                          activeEditor === "editor2"
                            ? "var(--mantine-color-blue-5)"
                            : "var(--mantine-color-gray-3)",
                      }}
                      onClick={() => handleEditorFocus("editor2")}
                    >
                      <Tldraw
                        components={components}
                        textOptions={textOptions}
                        overrides={UiOverRides}
                        assetUrls={{
                          fonts: {
                            tldraw_mono: exoFont,
                          },
                        }}
                        onMount={(editor) =>
                          handleEditorMount("editor2", editor)
                        }
                      />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Text fw={500} mb="md">
                      Editor 3
                    </Text>
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                        borderColor:
                          activeEditor === "editor3"
                            ? "var(--mantine-color-blue-5)"
                            : "var(--mantine-color-gray-3)",
                      }}
                      onClick={() => handleEditorFocus("editor3")}
                    >
                      <Tldraw
                        components={components}
                        textOptions={textOptions}
                        overrides={UiOverRides}
                        assetUrls={{
                          fonts: {
                            tldraw_mono: exoFont,
                          },
                        }}
                        onMount={(editor) =>
                          handleEditorMount("editor3", editor)
                        }
                      />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Text fw={500} mb="md">
                      Editor 4
                    </Text>
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                        borderColor:
                          activeEditor === "editor4"
                            ? "var(--mantine-color-blue-5)"
                            : "var(--mantine-color-gray-3)",
                      }}
                      onClick={() => handleEditorFocus("editor4")}
                    >
                      <Tldraw
                        components={components}
                        textOptions={textOptions}
                        overrides={UiOverRides}
                        assetUrls={{
                          fonts: {
                            tldraw_mono: exoFont,
                          },
                        }}
                        onMount={(editor) =>
                          handleEditorMount("editor4", editor)
                        }
                      />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Text fw={500} mb="md">
                      Editor 5
                    </Text>
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                        borderColor:
                          activeEditor === "editor5"
                            ? "var(--mantine-color-blue-5)"
                            : "var(--mantine-color-gray-3)",
                      }}
                      onClick={() => handleEditorFocus("editor5")}
                    >
                      <Tldraw
                        components={components}
                        textOptions={textOptions}
                        overrides={UiOverRides}
                        assetUrls={{
                          fonts: {
                            tldraw_mono: exoFont,
                          },
                        }}
                        onMount={(editor) =>
                          handleEditorMount("editor5", editor)
                        }
                      />
                    </Box>
                  </Paper>
                  <Paper withBorder p="md">
                    <Text fw={500} mb="md">
                      Editor 6
                    </Text>
                    <Box
                      h={400}
                      style={{
                        border: "1px solid var(--mantine-color-gray-3)",
                        borderRadius: "var(--mantine-radius-md)",
                        borderColor:
                          activeEditor === "editor6"
                            ? "var(--mantine-color-blue-5)"
                            : "var(--mantine-color-gray-3)",
                      }}
                      onClick={() => handleEditorFocus("editor6")}
                    >
                      <Tldraw
                        components={components}
                        textOptions={textOptions}
                        overrides={UiOverRides}
                        assetUrls={{
                          fonts: {
                            tldraw_mono: exoFont,
                          },
                        }}
                        onMount={(editor) =>
                          handleEditorMount("editor6", editor)
                        }
                      />
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
