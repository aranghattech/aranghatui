import { Tab, TabPanel, Tabs } from '@aranghat/components-react';

export default function Manual() {
  return (
    <>
      <Tabs value="a" activation="manual">
        <Tab value="a">Alpha</Tab>
        <Tab value="b">Beta</Tab>
        <TabPanel value="a"><p>Arrows move focus; Enter or Space selects.</p></TabPanel>
        <TabPanel value="b"><p>Beta panel.</p></TabPanel>
      </Tabs>
    </>
  );
}
