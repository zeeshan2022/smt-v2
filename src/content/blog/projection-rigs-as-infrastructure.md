---
title: "Projection Rigs Are Infrastructure: Lessons From Keeping 18 Installations Alive at EXPO 2020 Dubai"
description: "Six months, eighteen projection mapping installations, millions of visitors. What treating media servers like enterprise hosts taught us — and how to apply it to any venue."
pubDate: 2026-08-18
author: "Zeeshan Haider"
category: "Event Technology"
readTime: "6 min"
keywords: ["Projection Mapping Dubai", "Event Technology Dubai", "Smart Venue Solutions UAE"]
---

During Expo 2020 Dubai operations with Farnek, we sustained eighteen projection mapping installations plus interactive touch, motion, laser and PCB-controlled exhibits across six months of continuous daily show cycles. Nobody writes the boring post about that. The boring post is the point.

## The failure mode nobody plans for

Creative vendors design shows. IT teams inherit machines. The inherited machine is usually a Windows box with a GPU, a playback licence, no patch strategy, no monitoring, static IP written on tape behind the projector, and USB ports facing the public.

That box is now: an unmanaged endpoint on your event network, a single point of failure for a headline experience, and a forensic nightmare if compromised.

## The day-two operating model that worked

We ran every rig as monitored infrastructure:

- **Segmented exhibit VLANs** — show-control traffic isolated from guest WiFi and corporate systems, with ACLs between planes.
- **Health checks as ritual** — nightly automated pings, temperature reads, disk and licence-state checks before doors opened. Failures became morning tickets, not afternoon outages.
- **Standardised builds and spares rotation** — identical images across rigs meant any tech could rebuild any node from documentation, not tribal knowledge.
- **Calibration windows** — ambient light drift and thermal movement de-align maps slowly; scheduled re-alignment beat emergency re-alignment every time.

## The checklist for venues today

If you operate a permanent smart venue, ask four questions: How many media PCs can you name? When were they last patched? Who monitors them at 03:00? What is the recovery objective when one dies on opening night?

If the answers are uncomfortable, the problem is not creative — it is infrastructure discipline. That discipline is exactly what we now bake into Smart Venue OS and Venue Command Center: occupancy, device health, incidents and operations dashboards covering experience technology alongside HVAC and network gear.

The show must go on. Treat it like it does.
