<!-- markdownlint-disable --><!-- textlint-disable -->

# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.0 (2024-03-06)

### ⚠ BREAKING CHANGES

- this version does not work in Sanity Studio V2.
- This version no longer works in Studio V2

### Features

- add conditional clear context menu buttons for completed schedules [sc-14679] ([19c165a](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/19c165ae3c1be414ddaa6930000f86ec2f52579f))
- add custom validation callback to enable disabling date ranges [sc-14488] ([e03e3a8](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/e03e3a8dcba0e97fc8924cf42a92a1fc4bbf3632))
- add hooks for managing form state and edit dialogs, connect edit dialogs, general cleanup ([b6fc014](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/b6fc0146c3975104365bc9516f2cf65fa450367f))
- add link state to schedule items (within documents) ([77c6343](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/77c6343a7dbe487e06a1fd82e735608c9e3430e7))
- add relative date tooltips to execution dates ([07b6d46](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/07b6d466c398b401173cd7853574cd0bddd08b8a))
- add support for custom input date formatting ([e25285e](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/e25285e2f1d2e20d2064fec4aed080c2ee8931cd))
- add-unpublish-action ([#1](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/1)) ([36010d0](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/36010d0bf63d9a170480bdd84665424e4482c3a1))
- correctly display schedules with undefined / missing documents [staging sc-14378] ([a7da227](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a7da22712be257327f4a738b8f0a06188616b2a9))
- correctly infer document schema type from schedule (first document) ([7ae630c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/7ae630c01f1478b4a93611949daca2f17b52e66b))
- create dedicated tool calendar component, make calendar + datetime inputs tz-aware ([5c6000a](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/5c6000a915113abcf211987745fdb2481c5c520f))
- **DialogTimeZone:** standard timezone formatting ([223cf18](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/223cf18e79fbceca107c647d4f429e25d1f829cf))
- display close icon on selected tool calendar days, add grid gap to fix focus styling issue ([f61673c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/f61673cc1fcbf11ef4abe2ef22ebb83633dd3123))
- display schedule polling errors inside dialogs, dont show tool schedules if an error is found ([032e905](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/032e905035571a9cfbdcd9ffa610fb3869c50cdd))
- enable batch schedule deletion on completed filter page [sc-14679] ([ca5ffd9](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ca5ffd967b59456d111f96f737bc83050585ac78))
- experimental TimezoneInput ([651231e](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/651231e05900daaf01f01ee55805b29a4ce8f69b))
- export `Schedule` ([#71](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/71)) ([1c12063](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/1c120635b440c2ee32ddeb9123ddf15135c5f02c))
- first pass of bringing in studio's draft + publish status indicators ([4a2762f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/4a2762f1d044c2033ad6820dd525332d5e81aacc))
- first pass of calendar day pips [sc-16236] ([bc9848a](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/bc9848a08d5b8776da958dd71d3ea2c24c81efca))
- first pass of calendar day selection, add date routes + remove validation from filter tags ([36b2c31](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/36b2c318d59970c86092db497589b681d7a32cf6))
- first pass of conditional time zone button + date inputs with element queries ([acef172](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/acef1727205428cf02f7c7b6de393215e096ff23))
- first pass of empty filter states [sc-14679] ([ff3a7a8](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ff3a7a8d33dd606bfcd269087bbc1df2d2058740))
- first pass of global time zone date formatting, add tz formatting to datetime input + calendar ([8488cb5](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/8488cb553fef869cba0d5d9f8cb0476bd6eb3069))
- first pass of permission-aware document actions and context menus [staging sc-14577] ([6cf35a4](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/6cf35a4f6209aae5a9a38d73219674e5c59daa9a))
- first pass of updated tab navigation + responsive tool layout [sc-14679] ([3d5007c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/3d5007c85f74d45d1ee82dd1a309a5f4da87629d))
- firstpass list validation and schedule banner ([8260b11](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/8260b1190bd66b7ed0680dfc5190c890c4abd523))
- fixed missing dependencies for ScheduleItem preview memo ([b6c4609](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/b6c460921107946a693dee8da22f8920157bef88))
- fleshed out DialogTimeZone ([d8c05f0](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/d8c05f096aeffd2c5d663c53a479e72bdccfea24))
- initial studio V3 release ([db571a6](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/db571a6fa98f0ef8657a528d087023ae2b78ca00))
- initial Studio V3 version ([212e34b](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/212e34bac8813aa8254ff7f5b8631f956db7be27))
- minor tool calendar tweaks: remove weekend day highlight, add small radius and extra padding ([5ad915c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/5ad915c08c7cacf111aab2cb589105e27480a7e1))
- mock/scaffold of useScheduleOperation ([109b377](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/109b377f21bba28b5f04ecba9a290e9f842aebbb))
- mutate swr cache on schedule update + delete, add typesafe custom events [staging sc-14442] ([2768899](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/27688999d0392773f5f0a2ade7a654108fe2043a))
- only validate scheduled items ([bd8f122](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/bd8f12265cabf6430ab7a039f609bc7889c3a88f))
- push toasts on TZ changes, use more expressive toast description component ([d6f90fa](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/d6f90fa577a5b55576f004bba6b9fabbd27bc3e1))
- re-add v2 support for unpublish action badges ([#47](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/47)) ([f1f72a9](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/f1f72a98ce48c33240e8759d80a53f5940cf3913))
- render schedule date over 2 lines on small breakpoints, update day copy, layout tweaks ([25b019f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/25b019fc00b50dfe065dd1b0d6ef2dc015bdc49e))
- schedule deletion, simplify fetching logic ([c7b990f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/c7b990f702ee2f6be0a8b60761756285dd185222))
- TimeZonedCalendar ([af575db](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/af575db88d60c74395f9d630ba664e4be8b75230))
- **tool:** add edit intent links to schedule items [sc-14378] ([013c72f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/013c72f4393780fc77f096d1b9432da4e365db8a))
- **toolcalendar:** display calendar days that fall on weekends ([bf4b0fd](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/bf4b0fd32d5e4aefebcea825b42fe0970a32b1bc))
- **tool:** correctly sort schedules based on filter, add headers [staging sc-14377] ([655cc1c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/655cc1c1328127ae69ab3ce964ea3b6152209a68))
- **tool:** first pass of sort context menu [sc-14679] ([cef913d](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/cef913d3393d912ac4f9f0a11f8f57e5e4255658))
- **tool:** initial support for immediately publishing schedules ([8d66522](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/8d6652213a664ec6900c391f0fbf711b8acbe069))
- **tool:** intiial pass of document previews on schedule items ([ac4ea37](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ac4ea3734e6bbfa79882ae847d95ca156cbba71e))
- **tool:** naive first pass of schedule filter views ([ad8e775](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ad8e7756782b571510612a0a2877cf79dbe41fd4))
- **toolpreview:** hide presence on smaller breakpoints, use % based width ([ad98c4f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ad98c4f009c31f4cae5cdf034080dbb977105d6e))
- tweak error callout copy and layout ([a1b2290](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a1b2290a77871c35496d0704e2499b71d6425460))
- update layout for "no schema" schedule item ([e04213c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/e04213c03b815053cb0972f0c9ce0d088fee2fa4))
- update time zone dialog, create custom tz type, other tz related changes ([39afd0f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/39afd0fec573aa13406440c89e53ab0971d34524))
- use axios for non-GROQ requests, update error response handling ([33685a3](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/33685a302f85e1fc69fff9ef977768edd5cb2e8c))
- use Callout component, context menu in small schedule items, edit form ([b968323](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/b9683231a252e2bbb1f8bfbf934cd7ddfa6c0307))
- use checkbox instead of button for edit enable ([011d9bd](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/011d9bdeb121ee3c3f6b65a792ff9acfdcc18c25))
- use conditional titles for schedule actions, simplify dialog headings and toasts ([a854e0a](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a854e0a395ed4383250ca71c47f9cf43d877ceda))
- use default publish action [staging sc-14582] ([8bdca16](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/8bdca162b86854a932ccfe06fcfa9dc197b82ff4))
- use menu button with intent-navigation for validation issues ([b6eec49](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/b6eec4966076133ed28eb7d87e6a7b00a2bd0c43))
- use more verbose / human readable datetime formatting in schedule items ([4ceea29](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/4ceea292b62e892a14ab5be8672da7528499a78b))
- use updated schedule banner layout, rename 'validation issues' to 'validation errors' ([dbf2762](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/dbf27626e75bd0e9e835eb5048f9c0a6f1acbaa8))
- useTimezone hook ([22af74c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/22af74ce204e835c4af3557273dff8d9bbb2eaf4))
- virtualization tweaks: remove a few layout constants, defer validation ([bdae517](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/bdae51709d0b4f4435eb685fa5caabf20760a36e))
- virtualized list to cope with listener limitations ([61fe908](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/61fe9082bcf2232beb685522f2d08cf06234cf5b))

### Bug Fixes

- account for empty values of `documentType`, dont run validation with documents missing types ([c972391](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/c97239153ad94e6863b73497c7875f0826f58a21))
- add fallback placements to datetime input popover ([5377de9](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/5377de9ca56f4c4b17c4947a593caf20c2d3673f))
- align new schedule validation text ([ece21f8](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ece21f8068951a4dcb237dbaa0ee124b5d1b66fd))
- autocomplete popover is no longer misaligned in schedule document dialog ([7041684](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/7041684ad84122894ab26afbab17ff0f8aafbc6f))
- broken link ([d6c43e4](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/d6c43e4f4d4d975d24799a5e61ae7f462fdf8765))
- check for scheduled publishing feature flag in both tool + document actions [sc-19032] ([1cbc209](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/1cbc209c6366f909fff3b5e0caacbc9718ae755f))
- compiled for sanity 3.0.0-rc.0 ([437e291](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/437e2912221943600c002271c22fffc48c4906c7))
- correctly display (and sort by) `executedAt` if present on schedules ([1c5e0b9](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/1c5e0b988be8f062835ec257137546ee701babc3))
- correctly display reason for cancelled schedules, only validate upcoming schedules [sc-19033] ([ae14626](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ae14626c0f4b90735eb5c5cc262e2f4990e4cfc7))
- correctly handle schedules with null `executeAt` values [sc-19031] ([f6b3bdd](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/f6b3bdd9bc49e6f74a94c32687b387ae8c762d67))
- correctly infer icon color from filter tab card, tweak margins ([9dadd0c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/9dadd0ce01d62d9f23ae0cc33a4fba126137c69e))
- **datetimeinput:** ensure that calendar wall time values are converted to UTC in callbacks ([07a3842](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/07a3842a5327e4f61898a962adb6e09256eb2089))
- **deps:** @sanity/util bump ([7641344](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/76413445126d5c58e35b78d6372a34ec16c0fe0e))
- **deps:** added semver workflow ([00b3052](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/00b3052c7c94f4d1aa2aa352fb8087ecd7e5b9da))
- **deps:** compiled for sanity 3.0.0-rc.2 ([6a9619d](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/6a9619d4d35dd85c62f41895689bbf011173798c))
- **deps:** dev-preview.21 ([25b3198](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/25b319841b0bfb1bc43bea58c3e49f28370117e2))
- **deps:** dev-preview.22 ([524cdf9](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/524cdf901f9dd7c63d0f08c0216b4c5d3aad0be1))
- **deps:** pin dependencies ([#31](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/31)) ([5ccd60e](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/5ccd60e1cf0d1caa32a3d5811f1df0d7b932037a))
- **deps:** pkg-utils & @sanity/plugin-kit ([373c025](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/373c0258c2bac37a0f906ea3f7f415509410f97b))
- **deps:** sanity ^3.0.0 (works with rc.3) ([92665a3](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/92665a335c4faf64d82408ec2618af416dc13988))
- **deps:** update dependencies (non-major) ([#33](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/33)) ([33c3521](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/33c3521e51fb6e1614c3181649be6833fefe836e))
- **deps:** update dependencies (non-major) ([#73](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/73)) ([c23f611](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/c23f6115e7627bd82e14e2fd132d933280e8708f))
- **deps:** update dependency date-fns-tz to v2 ([#57](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/57)) ([99e5479](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/99e5479ee1d7c255a1fa53c011a3f6d540f88e07))
- **deps:** update sanity monorepo to v3.11.5 ([#74](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/74)) ([d7ad94f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/d7ad94f9049d0cfdf8f8223c0ebe8d4352ea717c))
- **deps:** update sanity-ui-pin ([#35](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/35)) ([eca498c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/eca498c725114ab7add2211a20cd9972702a9ea3))
- **deps:** version updates ([ccfd466](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ccfd466a204da7701d4b24f6764b32d6e51ae3b4))
- **deps:** widen @sanity/ui peer dependency range ([9ad8380](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/9ad838035799ff8b796eb4aeb0b78e84a723e29b))
- dev-preview.17 compatability ([ea820e4](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ea820e4ea5aad918721369b9602e9bd33b91ba19))
- disable schedule document action when liveEdit is enabled ([daa2587](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/daa25879107f8f90a31ab729bf1ee413d9feb202))
- don't render context menus with invalid schema types, refactor schedule items [sc-15126] ([1e54e8f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/1e54e8f6883c205a636c30ad2b489af878792f4a))
- dont hard code document type and infer from retrieved schedule ([84c1bc3](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/84c1bc3af19522c73d40ac4782208ae7624d7207))
- enforce dd/MM/yyyy format in schedule datetime input ([bff338c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/bff338cbd5bd795431f9f7538628caa39aa6a15f))
- ensure date is correctly converted to zoned time before parsing / generating date slug ([2e33609](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/2e33609cf4b0d4831533213dde5c461ff81ce63e))
- ensure date tooltips are correctly centred ([549201c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/549201c4fe9158101fb4b3c633331f47efd7acb4))
- ensure datepicker popovers render and constrain correctly within portals ([06d3d0e](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/06d3d0efeb894d44bf0722b7b8f94f0716bb1e98))
- ensure datetime inputs use UTC only whilst calendar uses wall time, add utc<->tz helpers ([df08b05](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/df08b05bd3280df88b022e6c44dded9a40cfc1ae))
- ensure document badges and inline schedule banner correctly display dates in local user time ([6e8c388](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/6e8c3882fb177567437b47f7569eaa2732a93644))
- ensure RHS column header remains sticky on scroll ([42525c2](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/42525c2a0b99db9278356d9c6e27adb82369c942))
- ensure time zone button tooltips display correctly, update position in schedule headers ([44aa2c4](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/44aa2c4d291202470caf0024420d5de363d22ae0))
- ensure time zone selection is legible in dark mode ([4e84945](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/4e84945f9bcdf44636ec70ef3e459f27ba71bc7d))
- fix regression with avatar + document status shrinking within flex parent ([bccc421](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/bccc421f02481c665f38265353ed15adf2728360))
- fix regression with calendar pips + tooltips not respecting 'executedAt' time ([ca1ddc0](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ca1ddc05072a0fab7b26986c5db48efd2a82be5e))
- fix regression with context menu not correctly opening edit dialog ([db10cc8](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/db10cc8b4ded65201885c0bdd212a195d353320e))
- focus selected date by default, if present ([862cd63](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/862cd63307fd6ca32548fcb9197082adbfdbbb41))
- force default tone on context menu popvers, dont infer card colors in dialogs ([87d46b6](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/87d46b6f802976051089bff1cc5cea6aad2b2139))
- immediately update SWR cache upon schedule publish and revalidate ([fd9cf2a](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/fd9cf2a1f9a51d4d5483230f7e78cb11881f70f2))
- import proper sanityClient ([ba73ede](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/ba73edea1ed8f7041450d622bd5ae1759dd96bdb))
- internalize `ValidationList` component ([#81](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/issues/81)) ([6e5abb5](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/6e5abb5a2d0c432ab7af87d7c4215eb142c2b090))
- link typo ([28b8d75](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/28b8d75b141de1675c04fd315b012de44e3a3e01))
- **lint-staged:** only lint staged files ([beac755](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/beac755fb6f9f548879960f6bbae6847dbd46af7))
- memoize initial stored value and handlers in useTimeZone ([da0e65b](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/da0e65bd2425bd82f6a062ce2b8cabbd80aaccda))
- memoized document type ([56afc1e](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/56afc1e5feb1ebc119ce3811023972a87f295713))
- migrate to react-virtual v3 ([e65c21f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/e65c21f54240e434a06e6e5894393dec9c1e5bc3))
- **newscheduleinfo:** wrap warning inside a critical card ([e6944cd](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/e6944cded41d1829deaaf94e46b9f0cb5f06c085))
- only render schedule banner when we have an id ([43422cb](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/43422cb1e0ce2d2bb260bffcde28cf2e04dc4748))
- prevent 'flash' of form input mismatch on blur/focus events ([37a8e9b](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/37a8e9b565a30bcb2b61b2d2ec2e38b5c59c339f))
- prevent dialog header tooltips from triggering on mount, re-instate warning in publish dialog ([6a62957](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/6a62957a267df66fa214fedbcbe33a0744cb42f8))
- re-enable missing calendar day routes, update tool header positioning ([83f0e27](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/83f0e279f02b5450ace646b760853459cfec18a6))
- refactor schedule items, conditionally show generic context menu when documentType is missing ([b6799fa](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/b6799fa2deb5870e2ba9cb046344aaa73e12af2e))
- remove prefix from publish date tooltip ([c45d637](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/c45d6374716ec4acaf1b62c540c88935e510b6b9))
- remove redundant schedule patch / update prior to deletion ([a7c8c76](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a7c8c765ed5a004d3bcbd66a0a06e750180d99a3))
- render document status in portals, correctly sort schedules in day view ([6338d30](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/6338d30fff896fa13ce6d07b656796cc7720cae9))
- replace route on initial mount to ensure back button works correctly ([30ff4cf](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/30ff4cf2086c40a576905cd18721e483027ddb57))
- run custom DateTimeInput validation when input is parsed on change / blur, add custom message ([3feb646](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/3feb6469a6365c922b648286732662dcf93e1c5a))
- sanity/util dev-preview.17 compatability ([4e29800](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/4e29800a3b4e2936875a4bbf98b24b63702942bd))
- **schedule action:** prevent schedule creation until document exists (has draft or published state) ([7b607ab](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/7b607ab7f3486295d3ebb7e633f54e253b66f76f))
- **scheduleaction:** disable document action if schedules fail to, or are in the process of loading ([a7fb8c4](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a7fb8c4579525d3217b9ba126fe45d771d1f79a5))
- **ScheduleContextMenu:** nullish check on schemaType ([a04cecd](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a04cecd0b7cea462fafa4a416a582bb848c66727))
- **schedulefilters:** don't forward refs unnecessarily ([855d123](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/855d1233ba6ef791985b4d8ff793e5cde609de6b))
- **schedulefilters:** forward refs and pass onFocus to fix keyboard tabbing ([c533737](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/c5337374c3497c20e0a6d5d2faae7bfdd912547f))
- **scheduleitem:** regression with placeholder state not showing, remove errorneous conditional hook ([a5b7157](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a5b7157b651be53dd093aba6d4e0d63efc77fefe))
- **schedules:** correctly key fragments rather than their children ([e5e214e](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/e5e214e33bd625897f19aec8f8f98bc5fbacae0c))
- select and focus calendar on 'today' click, reset virtual list scroll position on state change ([c7c2514](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/c7c2514c4abc1a66b2bac8c840b68ae80e2dc8da))
- simplify and correctly render tool filter tab buttons ([4fb90bf](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/4fb90bfaa651db97ba1110d96b72129510f0eb5a))
- **tool:** display initial loading state (rather than no results page) on mount, generic error state ([2ce7831](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/2ce78312dd98629273d5b276e4d9adf46cc7d281))
- tweak schedule banner layout + validation info, force default tone on context menu popovers ([b5f7654](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/b5f765472ce796e3699264bf6fe93e27cb27fa70))
- tweak tab layouts slightly, add spacing + highlight tabs when validation errors exist" ([c20797c](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/c20797c0ec732728e530c35d3944eaa26efb4441))
- use correct icon for edit schedule ([7b25959](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/7b25959427625e7a3adcd0c31505b37501fe4a2e))
- use element queries on "no schema" schedule items, force portaled tooltips in tool calendar" ([491324a](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/491324accb3561f4fec850342ff7df0bc1ba4671))
- use new useClient api ([87c7322](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/87c73227774a14340949708dcf71506a4579921e))
- use studio client to handle authorized requests, remove axios ([a2f6be2](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a2f6be23d0a6b6ee52e616d0534506f487d3603f))
- use versioned Sanity client ([918c2d1](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/918c2d1f5f96e7a12efe662781fecfaf3eb119e0))
- **usepollschedules:** update fetcher to account for breaking API change ([8f6d842](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/8f6d842d439e676ea7f014cf89f15a457e2a38c9))
- **User.tsx:** remove faulty code ([a5558cb](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/a5558cb4d250769f5d19e30114e052e8aa45e75b))
- **usescheduleoperation:** use publish endpoint and remove previous workaround ([d837dec](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/d837dec4219a80ca1c4a88c259051d2bf5a3cfd5))
- useVirtual should derive size based off source items, not only schedules (include headers) ([50f378f](https://github.com/BurgersOnBrioche/sanity-plugin-scheduled-publishing/commit/50f378f2b9fb40b320629c58f1e26b1cf4960aaa))

## [1.3.0](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.2.4...v1.3.0) (2024-01-30)

### Features

- add support for custom input date formatting ([e25285e](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/e25285e2f1d2e20d2064fec4aed080c2ee8931cd))

## [1.2.4](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.2.3...v1.2.4) (2024-01-12)

### Bug Fixes

- ensure time zone button tooltips display correctly, update position in schedule headers ([44aa2c4](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/44aa2c4d291202470caf0024420d5de363d22ae0))
- migrate to react-virtual v3 ([e65c21f](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/e65c21f54240e434a06e6e5894393dec9c1e5bc3))
- simplify and correctly render tool filter tab buttons ([4fb90bf](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/4fb90bfaa651db97ba1110d96b72129510f0eb5a))

## [1.2.3](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.2.2...v1.2.3) (2024-01-10)

### Bug Fixes

- **deps:** widen @sanity/ui peer dependency range ([9ad8380](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/9ad838035799ff8b796eb4aeb0b78e84a723e29b))

## [1.2.2](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.2.1...v1.2.2) (2023-11-24)

### Bug Fixes

- add fallback placements to datetime input popover ([5377de9](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/5377de9ca56f4c4b17c4947a593caf20c2d3673f))

## [1.2.1](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.2.0...v1.2.1) (2023-08-11)

### Bug Fixes

- ensure datepicker popovers render and constrain correctly within portals ([06d3d0e](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/06d3d0efeb894d44bf0722b7b8f94f0716bb1e98))

## [1.2.0](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.1.1...v1.2.0) (2023-07-31)

### Features

- export `Schedule` ([#71](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/71)) ([1c12063](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/1c120635b440c2ee32ddeb9123ddf15135c5f02c))

### Bug Fixes

- broken link ([d6c43e4](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/d6c43e4f4d4d975d24799a5e61ae7f462fdf8765))
- **deps:** update dependencies (non-major) ([#73](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/73)) ([c23f611](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/c23f6115e7627bd82e14e2fd132d933280e8708f))
- **deps:** update dependency date-fns-tz to v2 ([#57](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/57)) ([99e5479](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/99e5479ee1d7c255a1fa53c011a3f6d540f88e07))
- **deps:** update sanity monorepo to v3.11.5 ([#74](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/74)) ([d7ad94f](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/d7ad94f9049d0cfdf8f8223c0ebe8d4352ea717c))
- internalize `ValidationList` component ([#81](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/81)) ([6e5abb5](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/6e5abb5a2d0c432ab7af87d7c4215eb142c2b090))
- link typo ([28b8d75](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/28b8d75b141de1675c04fd315b012de44e3a3e01))

## [1.1.1](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.1.0...v1.1.1) (2023-02-01)

### Bug Fixes

- ensure time zone selection is legible in dark mode ([4e84945](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/4e84945f9bcdf44636ec70ef3e459f27ba71bc7d))
- memoize initial stored value and handlers in useTimeZone ([da0e65b](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/da0e65bd2425bd82f6a062ce2b8cabbd80aaccda))

## [1.1.0](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.0.2...v1.1.0) (2022-12-13)

### Features

- re-add v2 support for unpublish action badges ([#47](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/47)) ([f1f72a9](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/f1f72a98ce48c33240e8759d80a53f5940cf3913))

## [1.0.2](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.0.1...v1.0.2) (2022-11-28)

### Bug Fixes

- **deps:** sanity ^3.0.0 (works with rc.3) ([92665a3](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/92665a335c4faf64d82408ec2618af416dc13988))

## [1.0.1](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v1.0.0...v1.0.1) (2022-11-16)

### Bug Fixes

- **deps:** compiled for sanity 3.0.0-rc.2 ([6a9619d](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/6a9619d4d35dd85c62f41895689bbf011173798c))

## [1.0.0](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.1.5...v1.0.0) (2022-11-16)

### ⚠ BREAKING CHANGES

- this version does not work in Sanity Studio V2.
- This version no longer works in Studio V2

### Features

- initial studio V3 release ([db571a6](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/db571a6fa98f0ef8657a528d087023ae2b78ca00))
- initial Studio V3 version ([212e34b](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/212e34bac8813aa8254ff7f5b8631f956db7be27))

### Bug Fixes

- compiled for sanity 3.0.0-rc.0 ([437e291](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/437e2912221943600c002271c22fffc48c4906c7))
- **deps:** @sanity/util bump ([7641344](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/76413445126d5c58e35b78d6372a34ec16c0fe0e))
- **deps:** added semver workflow ([00b3052](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/00b3052c7c94f4d1aa2aa352fb8087ecd7e5b9da))
- **deps:** dev-preview.21 ([25b3198](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/25b319841b0bfb1bc43bea58c3e49f28370117e2))
- **deps:** dev-preview.22 ([524cdf9](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/524cdf901f9dd7c63d0f08c0216b4c5d3aad0be1))
- **deps:** pin dependencies ([#31](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/31)) ([5ccd60e](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/5ccd60e1cf0d1caa32a3d5811f1df0d7b932037a))
- **deps:** pkg-utils & @sanity/plugin-kit ([373c025](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/373c0258c2bac37a0f906ea3f7f415509410f97b))
- **deps:** update dependencies (non-major) ([#33](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/33)) ([33c3521](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/33c3521e51fb6e1614c3181649be6833fefe836e))
- **deps:** update sanity-ui-pin ([#35](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/35)) ([eca498c](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/eca498c725114ab7add2211a20cd9972702a9ea3))
- **deps:** version updates ([ccfd466](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/ccfd466a204da7701d4b24f6764b32d6e51ae3b4))
- dev-preview.17 compatability ([ea820e4](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/ea820e4ea5aad918721369b9602e9bd33b91ba19))
- memoized document type ([56afc1e](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/56afc1e5feb1ebc119ce3811023972a87f295713))
- re-enable missing calendar day routes, update tool header positioning ([83f0e27](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/83f0e279f02b5450ace646b760853459cfec18a6))
- sanity/util dev-preview.17 compatability ([4e29800](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/4e29800a3b4e2936875a4bbf98b24b63702942bd))
- use new useClient api ([87c7322](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/87c73227774a14340949708dcf71506a4579921e))

## [0.3.0-v3-studio.11](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.10...v0.3.0-v3-studio.11) (2022-11-04)

### Bug Fixes

- **deps:** pkg-utils & @sanity/plugin-kit ([373c025](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/373c0258c2bac37a0f906ea3f7f415509410f97b))

## [0.3.0-v3-studio.10](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.9...v0.3.0-v3-studio.10) (2022-11-04)

### Bug Fixes

- **deps:** update dependencies (non-major) ([#33](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/33)) ([33c3521](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/33c3521e51fb6e1614c3181649be6833fefe836e))
- **deps:** update sanity-ui-pin ([#35](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/35)) ([eca498c](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/eca498c725114ab7add2211a20cd9972702a9ea3))

## [0.3.0-v3-studio.9](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.8...v0.3.0-v3-studio.9) (2022-11-04)

### Bug Fixes

- **deps:** pin dependencies ([#31](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/issues/31)) ([5ccd60e](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/5ccd60e1cf0d1caa32a3d5811f1df0d7b932037a))

## [0.3.0-v3-studio.8](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.7...v0.3.0-v3-studio.8) (2022-11-03)

### Bug Fixes

- compiled for sanity 3.0.0-rc.0 ([437e291](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/437e2912221943600c002271c22fffc48c4906c7))
- **deps:** @sanity/util bump ([7641344](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/76413445126d5c58e35b78d6372a34ec16c0fe0e))

## [0.3.0-v3-studio.7](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.6...v0.3.0-v3-studio.7) (2022-10-27)

### Bug Fixes

- **deps:** dev-preview.22 ([524cdf9](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/524cdf901f9dd7c63d0f08c0216b4c5d3aad0be1))

## [0.3.0-v3-studio.6](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.5...v0.3.0-v3-studio.6) (2022-10-07)

### Bug Fixes

- **deps:** dev-preview.21 ([25b3198](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/25b319841b0bfb1bc43bea58c3e49f28370117e2))

## [0.3.0-v3-studio.5](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.4...v0.3.0-v3-studio.5) (2022-09-15)

### Bug Fixes

- use new useClient api ([87c7322](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/87c73227774a14340949708dcf71506a4579921e))

## [0.3.0-v3-studio.4](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.3...v0.3.0-v3-studio.4) (2022-09-14)

### Bug Fixes

- sanity/util dev-preview.17 compatability ([4e29800](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/4e29800a3b4e2936875a4bbf98b24b63702942bd))

## [0.3.0-v3-studio.3](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.2...v0.3.0-v3-studio.3) (2022-09-14)

### Bug Fixes

- dev-preview.17 compatability ([ea820e4](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/ea820e4ea5aad918721369b9602e9bd33b91ba19))

## [0.3.0-v3-studio.2](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.3.0-v3-studio.1...v0.3.0-v3-studio.2) (2022-09-14)

### Bug Fixes

- **deps:** added semver workflow ([00b3052](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/00b3052c7c94f4d1aa2aa352fb8087ecd7e5b9da))
- **deps:** version updates ([ccfd466](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/ccfd466a204da7701d4b24f6764b32d6e51ae3b4))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.5](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.1.4...v0.1.5) (2022-04-29)

### Bug Fixes

- check for scheduled publishing feature flag in both tool + document actions [sc-19032] ([1cbc209](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/1cbc209c6366f909fff3b5e0caacbc9718ae755f))

### [0.1.4](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.1.3...v0.1.4) (2022-04-29)

### Bug Fixes

- correctly display reason for cancelled schedules, only validate upcoming schedules [sc-19033] ([ae14626](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/ae14626c0f4b90735eb5c5cc262e2f4990e4cfc7))

### [0.1.3](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.1.2...v0.1.3) (2022-04-28)

### Bug Fixes

- correctly handle schedules with null `executeAt` values [sc-19031] ([f6b3bdd](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/f6b3bdd9bc49e6f74a94c32687b387ae8c762d67))

### [0.1.2](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.1.1...v0.1.2) (2022-03-23)

### Bug Fixes

- immediately update SWR cache upon schedule publish and revalidate ([fd9cf2a](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/fd9cf2a1f9a51d4d5483230f7e78cb11881f70f2))
- remove redundant schedule patch / update prior to deletion ([a7c8c76](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/a7c8c765ed5a004d3bcbd66a0a06e750180d99a3))
- use studio client to handle authorized requests, remove axios ([a2f6be2](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/a2f6be23d0a6b6ee52e616d0534506f487d3603f))

### [0.1.1](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/compare/v0.1.0...v0.1.1) (2022-03-22)

### Bug Fixes

- ensure document badges and inline schedule banner correctly display dates in local user time ([6e8c388](https://github.com/sanity-io/sanity-plugin-scheduled-publishing/commit/6e8c3882fb177567437b47f7569eaa2732a93644))
