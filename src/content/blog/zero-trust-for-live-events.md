---
title: "Zero Trust for Live Events: Securing the Show Network"
description: "How event IT teams should segment registration systems, vendor connections, AV control traffic and guest Wi-Fi — drawn from lessons running EXPO 2020 Dubai pavilion networks."
pubDate: "2026-08-14"
author: "Zeeshan Haider"
category: "Cybersecurity"
readTime: "7 min"
keywords: ["Event Cybersecurity UAE", "Network Segmentation Dubai", "Cybersecurity Dubai"]
---

Every large event is a temporary enterprise. In a single week, a venue gains hundreds of vendors, thousands of personal devices, payment flows, badge systems, and AV control networks that were never designed to coexist. Then the show opens — and everyone trusts everything.

Having run IT operations across six months of EXPO 2020 Dubai, I watched this pattern daily: the most fragile moment in any deployment is not the build week, it is the first hour of doors-open, when every untested assumption meets a crowd.

## The four networks every event actually has

In practice, an event network is at least four security domains wearing one VLAN ID:

1. **Operational IT** — registration, access control, POS, badging databases.
2. **AV & show control** — media servers, projectors, interactive exhibits, PLCs and embedded controllers. These devices are famously unpatchable and speak protocols with no authentication.
3. **Vendor/contractor connectivity** — dozens of organisations you do not control, connecting unknown hardware.
4. **Guest Wi‑Fi** — the public internet exit point for tens of thousands of attendees.

Treating these as one flat trust zone means a laptop on the exhibition floor can reach a media server driving a projection rig. That is how shows die.

## A zero-trust layout that survives show days

The model I apply starts from one premise: *assume every device on site is hostile until proven otherwise.*

- **Strict segmentation.** Each domain above gets its own L3 boundary with explicit ACLs. Exhibit control traffic never routes to vendor SSIDs. Full stop.
- **Identity before access.** Vendor access issues per-device credentials through a captive portal with short-lived leases rather than a shared key taped under a desk.
- **Read-only monitoring on OT-ish gear.** Snort/Suricata sensors and NetFlow on the AV VLAN give you detection without touching fragile players. In our SOC work we pipe this into Splunk or QRadar alongside corporate logs so event anomalies get analyst attention, not silence.
- **A documented incident ladder.** Who can power-cycle a media server at 09:00 on press day? If the answer requires a committee, rewrite it now, not then.

## The human perimeter

Phishing against event staff spikes during build weeks — fake exhibitor invoices and "urgent credential resets" land in inboxes full of strangers' emails by design. A 20-minute briefing to the crew does more than any appliance.

## What good looks like

When segmentation, monitoring and clear escalation paths work, they are invisible. The audience sees light and sound. The organiser sees uptime. That gap between spectacle and plumbing is exactly where a security partner earns their place on the show floor.

*Secure Media Tech delivers Event SOC services — dedicated monitoring, threat detection and incident management for live events across the UAE and GCC.*
