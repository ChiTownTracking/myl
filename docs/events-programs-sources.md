# Events and programs: sources and images

Reviewed September 19, 2026. The shared directory is in `src/data/activities.ts`; both `/events/` and `/programs/` use it. This is a curated overview, not an automatically synchronized social feed or a complete export of the accounts.

## Direct social sources

| Item | Public source | Local image |
| --- | --- | --- |
| Burdah Night, September 19, 2026, 7 PM, Jamia Al Mustafa | [MYL Instagram announcement](https://www.instagram.com/mylcanada/p/DdQDtD9RjIF/) | `events-programs/burdah-night-2026.jpg` |
| Al-Hidayah returns to Canada in 2028; no exact dates or registration announced | [Announcement shared on MYL's profile](https://www.instagram.com/alhidayah_ca/p/Dcos-V1sj-7/) | `events-programs/al-hidayah-2028.jpg` |
| Al-Hidayah 2026 recap | [Participant reflection](https://www.instagram.com/alhidayah_ca/reel/Dcr_nSYORDu/) | Existing Al-Hidayah archive |
| August 3, 2026 AI workshop with Ali Malik | [Workshop recap shared on MYL's profile](https://www.instagram.com/alhidayah_ca/p/DcDYm6wjtF6/) | `events-programs/al-hidayah-ai-workshop-2026.jpg` |
| Other Al-Hidayah workshops | [Syed Najam](https://www.instagram.com/alhidayah_ca/p/DcDQUfWFUGf/), [Shaykh Adnan Sohail](https://www.instagram.com/alhidayah_ca/p/DcDOQ8Ujbmp/), [Shaykh Ibrahim Hussain](https://www.instagram.com/alhidayah_ca/p/DcDKsn7layy/) | The workshop card specifically identifies its photo as Ali Malik's session |
| Cambridge 1500th Mawlid, September 4, 2025, brothers only | [MYL Facebook post](https://www.facebook.com/MYLCanada/posts/776213561571108/) | `events-programs/mawlid-cambridge-2025.jpg` |
| Al-Hikmah Series | [MYL Instagram highlight](https://www.instagram.com/stories/highlights/18052258229509199/) | `events-programs/al-hikmah-highlight.jpg`; original 150 px cover, displayed at native size |
| Conference series | [MYL Mercy Conference highlight](https://www.instagram.com/stories/highlights/18041473420565846/) | Existing Al-Rahma photography |

Downloaded posters and photos are stored locally and rendered through Astro's image pipeline. The build does not request Facebook or Instagram and does not depend on expiring CDN links. Portrait posters use `object-fit: contain` so their event information remains visible.

## Supporting official sources

- [July 18, 2026 Meet, Greet & Q&A recap](https://www.minhaj.org/english/Canada/tid/62850/Canada-MYL-Canada-Hosts-Meet-Greet-and-QA-Session-with-Shaykh-Hammad-Mustafa-al-Madani-al-Qadri.html): corrected the events overview's previous April 2026 date to the official recap's July date. Uses existing Q&A photographs.
- [Husn-e-Salah course announcement](https://mmcc-canada.org/myl-husn-e-salah-course/): three-month course starting October 25, 2023, led by Shaykh Dr. Abdullah al-Qadri. Presented by MQI and Minhaj School of Canada. Image downloaded from the article to `events-programs/husn-e-salah-2023.jpg`. Marked as a past course; the historical fee and weekly timetable are not offered as current registration information.
- [2021 conference](https://mmcc-canada.org/mercy-to-humanity-muhammad-pbuh-conference-by-muslim-youth-league-canada/), [2022 conference](https://www.minhaj.org/english/Overseas/tid/55097/Mercy-to-Humanity-Muhammad-pbuh-Conference-by-Muslim-Youth-League-Canada.html), [2023 conference](https://mmcc-canada.org/canada-3rd-annual-mercy-for-humanity-muhammad-pbuh-conference/): retain the existing sourced conference archive and corresponding local images.
- [MYL's official Linktree](https://linktr.ee/MYLCanada), linked from its Instagram bio, lists Youth I'tikaf Registration 2026. Its [public registration form](https://forms.gle/w6qKxLVmoBVrqEkh9) describes a three-day, two-night MMCC gathering for boys 14+, with food and stay included, but its description says March 13–15, **2025**. Because the year conflicts, the directory gives no dates and directs visitors to contact MYL about the next gathering. The image is explicitly captioned as the MYL Canada community, not as a photograph of I'tikaf.
- Hoops 4 Humanity and Tomorrow's Ummah retain the existing site's program identities and supplied images, with links to their established detail pages and official MYL channels. No new sports dates or recurring schedules are claimed.

Al-Hidayah remains identified as an MQI Canada initiative supported by MYL volunteers. Partner posts appearing on MYL's Instagram profile are not represented as independently organized MYL events.

## Updating

Add or revise entries in `src/data/activities.ts`, save the matching image under `src/assets/images/`, and retain a permalink to the original announcement or recap. Use absolute dates. Do not mark a historical post as open registration without checking the current announcement. Run `npm run build` after changes.
