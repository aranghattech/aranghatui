import { MegaMenu, MegaMenuGroup, MegaMenuItem, MegaMenuLink } from '@aranghat/extended-react';
import { Button, Card } from '@aranghat/base-react';

export default function Basic() {
  return (
    <>
      <MegaMenu>
        <MegaMenuItem label="Platform" layout="rows" maxRows={2}>
          <MegaMenuGroup label="Core features">
            <MegaMenuLink href="#ai-assistant"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/></svg>AI Assistant<span slot="description">Intelligent code suggestions</span></MegaMenuLink>
            <MegaMenuLink href="#code-editor"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Code Editor<span slot="description">Advanced syntax highlighting</span></MegaMenuLink>
            <MegaMenuLink href="#design-tools"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/></svg>Design Tools<span slot="description">Visual design system builder</span></MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="Advanced">
            <MegaMenuLink href="#analytics"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>Analytics<span slot="description">Real-time performance insights</span></MegaMenuLink>
            <MegaMenuLink href="#security"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>Security<span slot="description">Enterprise-grade protection</span></MegaMenuLink>
            <MegaMenuLink href="#automation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Automation<span slot="description">Workflow automation tools</span></MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="Resources">
            <MegaMenuLink href="#documentation"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>Documentation</MegaMenuLink>
            <MegaMenuLink href="#video-tutorials"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>Video Tutorials</MegaMenuLink>
            <MegaMenuLink href="#guides"><svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>Guides</MegaMenuLink>
          </MegaMenuGroup>
          <MegaMenuGroup label="Company">
            <MegaMenuLink href="#about">About</MegaMenuLink>
            <MegaMenuLink href="#blog">Blog</MegaMenuLink>
            <MegaMenuLink href="#careers">Careers</MegaMenuLink>
          </MegaMenuGroup>
          <Card slot="aside">
            <span slot="title">Getting started</span>
            <span slot="description">Learn the basics in five minutes.</span>
            <Button slot="footer" size="sm" full>Watch tutorial</Button>
          </Card>
          <Card slot="aside">
            <span slot="title">Need help?</span>
            <span slot="description">Talk to our sales team.</span>
            <Button slot="footer" size="sm" variant="outline" full>Contact sales</Button>
          </Card>
        </MegaMenuItem>
        <MegaMenuItem label="Pricing" href="#pricing" />
        <MegaMenuItem label="Docs" href="#docs" />
      </MegaMenu>
    </>
  );
}
