<script setup lang="ts">
import { Tab, TabPanel, Tabs } from '@aranghat/components-vue';
import { Button, Card, Field, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Tabs value="account">
    <Tab value="account">Account</Tab>
    <Tab value="password">Password</Tab>
    <TabPanel value="account">
      <Card>
        <h3 slot="title">Account</h3>
        <p slot="description">Make changes to your account here. Click save when you're done.</p>
        <Field>
          <Label slot="label">Name</Label>
          <Input value="Pedro Duarte" />
        </Field>
        <Button slot="footer">Save changes</Button>
      </Card>
    </TabPanel>
    <TabPanel value="password">
      <Card>
        <h3 slot="title">Password</h3>
        <p slot="description">Change your password here. After saving, you'll be logged out.</p>
        <Field>
          <Label slot="label">Current password</Label>
          <Input type="password" />
        </Field>
        <Button slot="footer">Save password</Button>
      </Card>
    </TabPanel>
  </Tabs>
</template>
