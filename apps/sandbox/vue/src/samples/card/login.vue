<script setup lang="ts">
import { Button, Card, Field, FieldGroup, Input, Label } from '@aranghat/base-vue';
</script>

<template>
  <Card>
    <h3 slot="title">Login to your account</h3>
    <p slot="description">Enter your email below to login to your account</p>
    <Button slot="action" variant="link">Sign up</Button>
    <FieldGroup>
      <Field>
        <Label slot="label">Email</Label>
        <Input type="email" placeholder="m@example.com" />
      </Field>
      <Field>
        <Label slot="label">Password</Label>
        <Input type="password" />
      </Field>
    </FieldGroup>
    <Button slot="footer">Login</Button>
    <Button slot="footer" variant="outline">Login with Google</Button>
  </Card>
</template>
