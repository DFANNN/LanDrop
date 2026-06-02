<template>
  <div class="h-full w-full flex flex-col bg-[#f4f4f5] rounded-3xl border border-slate-200/80 shadow-xl">
    <header class="flex items-center px-4 py-2">
      <div class="flex gap-2 items-center">
        <span class="h-3 w-3 rounded-full bg-[#ff5f57]"></span>
        <span class="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span class="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>
      <div class="flex-1 flex items-center justify-center gap-2">
        <span class="flex items-center justify-center h-6 w-6 rounded-lg bg-slate-950 text-xs text-white font-semibold">
          L
        </span>
        <span class="text-sm font-semibold text-slate-700">xxx</span>
      </div>
      <div class="flex items-center justify-center">
        <UIcon name="i-lucide-sidebar" class="h-4.5 w-4.5 cursor-pointer text-slate-500 hover:text-slate-950" />
      </div>
    </header>
    <div class="flex-1 min-h-0 flex gap-3 px-4 pb-4">
      <aside class="w-73 min-h-0 flex flex-col gap-3">
        <div class="py-2 flex items-center justify-between">
          <h1 class="text-xs font-semibold uppercase leading-5 text-slate-500">这是什么</h1>
          <UBadge color="neutral" class="font-bold rounded-full" size="sm">10 人</UBadge>
        </div>

        <div class="flex-1 min-h-0 flex flex-col gap-2 overflow-y-auto overflow-x-hidden scrollbar-none">
          <div
            class="flex items-center gap-3 px-3 py-2 rounded-xl transition duration-150 hover:bg-slate-200/45 cursor-pointer"
            v-for="(value, index) in userList"
            :key="`${value.name}-${index}`"
          >
            <UAvatar class="bg-black" :src="value.avatar" loading="lazy" />
            <div class="flex-1">
              <h3 class="text-[13px] font-semibold leading-4 text-slate-950">{{ value.name }}</h3>
              <div class="flex justify-between text-xs leading-4 text-slate-500">
                <div>{{ value.device }}</div>
                <div>{{ value.ip }}</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="flex items-center gap-3 px-3 py-2 rounded-xl transition duration-150 hover:bg-slate-200/45 cursor-pointer"
          >
            <UAvatar class="bg-slate-950" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" loading="lazy" />
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between gap-2">
                <h3 class="truncate text-[13px] font-semibold leading-4 text-slate-950">name</h3>
                <UBadge color="neutral" class="font-bold rounded-full" size="xs">本 机</UBadge>
              </div>
              <div class="flex justify-between text-xs leading-4 text-slate-500">
                <div>xxx</div>
                <div>xxx.xxx.xxx.xxx</div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <section class="flex-1 overflow-hidden rounded-[22px] bg-[#fafafa] p-5">main</section>
    </div>
  </div>
</template>

<script setup lang="ts">
const userList = ref([
  {
    name: 'Mike',
    ip: 'xxx.xxx.xxx.xxx',
    device: 'iphone',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
  },
  {
    name: 'Kate',
    ip: 'xxx.xxx.xxx.xxx',
    device: 'macOS',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kate'
  },
  {
    name: 'John',
    ip: 'xxx.xxx.xxx.xxx',
    device: 'iphone',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  },
  {
    name: 'Mike',
    ip: 'xxx.xxx.xxx.xxx',
    device: 'iphone',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
  }
])
</script>

<style></style>
