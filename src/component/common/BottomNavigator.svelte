<script>
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { BookOpenSolid, UserCircleSolid, BellRingSolid } from 'flowbite-svelte-icons';
</script>

<BottomNav classInner="grid-cols-3">
	<BottomNavItem btnName="Alarm" href="/alarm">
		<BellRingSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
	</BottomNavItem>
	<BottomNavItem btnName="Post" href="/post">
		<BookOpenSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
	</BottomNavItem>
	<BottomNavItem btnName="Profile" href="/profile">
		<UserCircleSolid class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
	</BottomNavItem>
</BottomNav>