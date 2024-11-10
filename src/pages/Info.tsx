import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer';

const markdownContent = `
# S/M-KID-Council

The **Software Technology, Mathematics & Technology, and Artificial Intelligence and Data Study Council** (S/M-KID-Council) consists of approximately 120 members across the study lines. We meet once every month and aim to create a cozy atmosphere at the meetings. To foster this, we enjoy dinner together before the meetings and typically indulge in some delicious cake.

## Our Focus

We strive to provide the best possible social study environment for students in the associated study lines. This is achieved through organizing a variety of social events such as:
- Christmas party
- Easter dinner
- All-girls dinner
- Cabin trips
- Other events that members wish to host

In addition, we collaborate with different companies to arrange academic events relevant to our students, often including networking sessions.

## Stay Updated

If you're interested in seeing all the exciting things we do, be sure to like our Facebook page: [**S/M-KID Rådets Infoside**](https://www.facebook.com/SMKIDCouncil). We aim to keep everyone updated on this platform.

## Join Us

Are you studying one of the relevant study lines and want to make a difference for your fellow students? Then join the council! It's always okay to attend one of our meetings to see if it's something for you. You can either contact your vector or send an email to **forpersoner@smkid.dk** for more information on when and where the next meeting will take place. The dates are also listed below, and as the meeting approaches, the agenda and location will be shared.

---

**Best Regards,**  
Chairpersons of the S/M-KID-Council

`;

export function Info() {
  return (
    <MarkdownRenderer content={markdownContent} />
  );
}
