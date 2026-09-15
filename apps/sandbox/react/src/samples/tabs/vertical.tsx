import { Tab, TabPanel, Tabs } from '@aranghat/components-react';

export default function Vertical() {
  return (
    <>
      <Tabs value="general" orientation="vertical">
        <Tab value="general">General</Tab>
        <Tab value="security">Security</Tab>
        <Tab value="billing">Billing</Tab>
        <TabPanel value="general"><p>General settings.</p></TabPanel>
        <TabPanel value="security"><p>Security settings.</p></TabPanel>
        <TabPanel value="billing"><p>Billing settings.</p></TabPanel>
      </Tabs>
    </>
  );
}
