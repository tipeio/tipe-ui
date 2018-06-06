<template>
  <div 
    class="add-avatar" 
    @click="$emit('click')">
    
    <svg 
      width="114px" 
      height="114px" 
      viewBox="0 0 114 114" 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="New-UI-Kit" 
        stroke="none" 
        stroke-width="1" 
        fill="none" 
        fill-rule="evenodd">
        <g 
          id="UI-Kit---Page-1" 
          transform="translate(-214.000000, -2836.000000)">
          <g 
            id="Group-70" 
            transform="translate(156.000000, 2837.000000)">
            <g 
              id="Group" 
              transform="translate(59.000000, 0.000000)">
              <path 
                id="Rectangle-3" 
                d="M56,0 L56,0 C86.927946,-5.68137151e-15 112,25.072054 112,56 L112,56 C112,86.927946 86.927946,112 56,112 L56,112 C25.072054,112 3.78758101e-15,86.927946 0,56 L0,56 C-3.78758101e-15,25.072054 25.072054,5.68137151e-15 56,0 Z" 
                stroke="#B5BACA" 
                fill="#F7F8FB" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-dasharray="6,8"/>
              <g 
                id="Camera-Icon" 
                transform="translate(40.000000, 42.000000)">
                <path 
                  id="Combined-Shape" 
                  d="M8.57142857,3 L8.87734591,0.858578644 C8.9477243,0.365929905 9.36964503,0 9.8672954,0 L22.1327046,0 C22.630355,0 23.0522757,0.365929905 23.1226541,0.858578644 L23.4285714,3 L30,3 C31.1045695,3 32,3.8954305 32,5 C32,10.8116967 32,15.1704692 32,18.0763175 M24.8599739,26 C19.7799797,26 12.1599884,26 2,26 C0.8954305,26 0,25.1045695 0,24 L0,5 C0,3.8954305 0.8954305,3 2,3 L8.57142857,3 M16,21 C19.8659932,21 23,17.8659932 23,14 C23,10.1340068 19.8659932,7 16,7 C12.1340068,7 9,10.1340068 9,14 C9,17.8659932 12.1340068,21 16,21 Z" 
                  stroke="#1F346C" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>
                <path 
                  id="Combined-Shape" 
                  d="M31.5,29 C29.0147186,29 27,26.9852814 27,24.5 C27,22.0147186 29.0147186,20 31.5,20 C33.9852814,20 36,22.0147186 36,24.5 C36,26.9852814 33.9852814,29 31.5,29 Z M31.9757762,24 L31.9757762,22.5 C31.9757762,22.2238576 31.7519186,22 31.4757762,22 C31.1996338,22 30.9757762,22.2238576 30.9757762,22.5 L30.9757762,24 L29.5,24 C29.2238576,24 29,24.2238576 29,24.5 C29,24.7761424 29.2238576,25 29.5,25 L30.9757762,25 L30.9757762,26.4757762 C30.9757762,26.7519186 31.1996338,26.9757762 31.4757762,26.9757762 C31.7519186,26.9757762 31.9757762,26.7519186 31.9757762,26.4757762 L31.9757762,25 L33.4757762,25 C33.7519186,25 33.9757762,24.7761424 33.9757762,24.5 C33.9757762,24.2238576 33.7519186,24 33.4757762,24 L31.9757762,24 Z" 
                  fill="#1F346C"/>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <p class="subtitle">Add avatar</p>
  </div>
</template>

<script>
export default {
  name: 'AvatarUpload'
}
</script>

<style scoped lang="postcss">
.add-avatar {
  display: grid;
  width: 100%;
  grid-row-gap: 1rem;
  justify-content: center;
  align-content: start;

  & .circle {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: var(--gray-blue-light);
  }

  & .outside {
    height: 100px;
    width: 100px;
    border-radius: 100%;
    border: var(--text-gray-light) dashed 1px;
  }

  & .subtitle {
    font-size: 1rem;
    color: var(--text-gray-normal);
    margin: 0;
    text-align: center;
  }
}
</style>
