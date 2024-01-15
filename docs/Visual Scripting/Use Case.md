---
sidebar_position: 4
---

# Use Case

The following are use cases implemented by *AnotheReality*, using the "**Visual Scripting**" package.

## Confetti Ball

**Confetti ball** is a mini game where the user has to collect **mini balls** in the environment , similar to "*Confetti*". Each time he/she collects a ball, an **animation** will start.

This implementation can be extended with **other features**, including saving a score, based on the number of balls collected.

![ConfettiBall](/img/confettiball.gif)

### Implementation

- Set the "**Action Invoke**" node with a trigger collider

	![ConfettiBall](/img/confettiball_1.png)

- Set the custom event that will be called from the "**Action Invoke**". Set the **play** and **stop** of the Confetti Ball in the scene

	![ConfettiBall](/img/confettiball_2.png)

- Set the **particles** that will emerge from the Confetti Ball when hit

	![ConfettiBall](/img/confettiball_3.png)

Confetti Ball **Inspector**:

![ConfettiBall](/img/confettiball_4.png)





