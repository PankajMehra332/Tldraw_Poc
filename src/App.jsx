import { useState } from "react";
import { Title, Paper, Stack, ScrollArea, Box } from "@mantine/core";
import "@tldraw/tldraw/tldraw.css";
import "./App.css";
import OutLine from "./molecules/OutLine";
import Library from "./molecules/Library";
import TldrawEditor from "./molecules/TldrawEditor";

function App() {
  const [activeSection, setActiveSection] = useState("Editors Tab");
  const [showOutline, setShowOutline] = useState(true);
  const [showLibrary, setShowLibrary] = useState(true);

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
          <OutLine
            setShowOutline={setShowOutline}
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          />
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
        {showLibrary && <Library setShowLibrary={setShowLibrary} />}
      </div>
    </div>
  );
}

export default App;
