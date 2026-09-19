import { MegaMenu, MegaMenuGroup, MegaMenuItem, MegaMenuLink } from '@aranghat/extended-react';

export default function MaxColumns() {
  return (
    <>
      <MegaMenu>
        <MegaMenuItem label="Products" maxColumns={3}>
          <MegaMenuGroup label="Build">
            <MegaMenuLink href="#editor">Editor</MegaMenuLink>
            <MegaMenuLink href="#deploy">Deploy</MegaMenuLink>
            <MegaMenuLink href="#functions">Functions</MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="Observe">
            <MegaMenuLink href="#analytics">Analytics</MegaMenuLink>
            <MegaMenuLink href="#logs">Logs</MegaMenuLink>
            <MegaMenuLink href="#alerts">Alerts</MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="Secure">
            <MegaMenuLink href="#firewall">Firewall</MegaMenuLink>
            <MegaMenuLink href="#access">Access</MegaMenuLink>
            <MegaMenuLink href="#audit-log">Audit log</MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="Store">
            <MegaMenuLink href="#postgres">Postgres</MegaMenuLink>
            <MegaMenuLink href="#key-value">Key-value</MegaMenuLink>
            <MegaMenuLink href="#blob">Blob</MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="AI">
            <MegaMenuLink href="#models">Models</MegaMenuLink>
            <MegaMenuLink href="#agents">Agents</MegaMenuLink>
            <MegaMenuLink href="#evals">Evals</MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="Collaborate">
            <MegaMenuLink href="#comments">Comments</MegaMenuLink>
            <MegaMenuLink href="#toolbar">Toolbar</MegaMenuLink>
            <MegaMenuLink href="#flags">Flags</MegaMenuLink>
          </MegaMenuGroup>
        </MegaMenuItem>
        <MegaMenuItem label="Pricing" href="#pricing" />
        <MegaMenuItem label="Docs" href="#docs" />
      </MegaMenu>
    </>
  );
}
