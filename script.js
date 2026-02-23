      let interviewArray = [];
        let rejectedArray = [];
        let currentStatus = 'all-buttons';
        let totalJobsCount = document.querySelector('.total-jobs-count');
        let interviewJobs = document.querySelector('.interview-jobs-count');
        let rejectedJobs = document.querySelector('.rejected-jobs-count');
        let allJobsCount = document.querySelector('.all-jobs');
        let allJobsCards = document.querySelector('.jobs-cards');
        let mainContainer = document.querySelector('main');
        let filterSection = document.querySelector('.filter-card-section');

        // no jobs available section jonno
        let noJobsAvailable = document.querySelector('.no-jobs-available');
  
//    niser 8 jobs section
        let interviewJobsCount = document.querySelector('.interview-jobs');
        let rejectedJobsCount = document.querySelector('.rejected-jobs');
        let interviewDiv = document.querySelector('.interview-div');
        let rejectedDiv = document.querySelector('.rejected-div');

        // all-interview-rejected  button
        let allButton = document.querySelector('#all-button');
        let interviewButton = document.querySelector('#interview-button');
        let rejectedButton = document.querySelector('#reject-button');


        function change(id){
            currentStatus = id;
           allButton.classList.remove('bg-[#3B82F6]', 'text-white');
           interviewButton.classList.remove('bg-[#3B82F6]', 'text-white');
          rejectedButton.classList.remove('bg-[#3B82F6]', 'text-white');

          allButton.classList.add('bg-gray-100', 'text-black');
           interviewButton.classList.add('bg-gray-100', 'text-black');
          rejectedButton.classList.add('bg-gray-100', 'text-black');

          let selected = document.getElementById(id);
          selected.classList.remove('bg-gray-100', 'text-black');
          selected.classList.add('bg-[#3B82F6]', 'text-white');

           if(id == 'interview-button'){
             allJobsCards.classList.add('hidden');
             filterSection.classList.remove('hidden');
             interviewDiv.classList.remove('hidden');
             rejectedDiv.classList.add('hidden');
             interviewRander();
             if(!interviewArray.length){
                noJobsAvailable.classList.remove('hidden');
             }else{
                noJobsAvailable.classList.add('hidden');
             }
           }else if(id == 'all-button'){
             allJobsCards.classList.remove('hidden');
             filterSection.classList.add('hidden');
             interviewDiv.classList.add('hidden');
             rejectedDiv.classList.add('hidden');
             noJobsAvailable.classList.add('hidden');
           }else if(id = 'reject-button'){
            allJobsCards.classList.add('hidden');
             filterSection.classList.remove('hidden');
             interviewDiv.classList.add('hidden');
             rejectedDiv.classList.remove('hidden');
               rejectRander();
              if(!rejectedArray.length){
                noJobsAvailable.classList.remove('hidden');
             }else{
                noJobsAvailable.classList.add('hidden');
             }
           }
           
         }


           function allJobsCardCounter(){
            let numberOfJobs = allJobsCards.children.length;
             allJobsCount.innerText = numberOfJobs;
             totalJobsCount.innerText = numberOfJobs;
            if(!allJobsCards.children.length){
                noJobsAvailable.classList.remove('hidden');
            }
         }

        allJobsCardCounter();

        // jobs card delete section 
              mainContainer.addEventListener('click', (event)=>{
                if(event.target.id == 'delete-btn'){
                    let parent = event.target.parentNode.parentNode;
                    parent.remove();
                    allJobsCardCounter();
                }
                if(!allJobsCards.children.length){
                     noJobsAvailable.classList.remove('hidden');
                }
               
           })

        //    interview and reject jobs counter
      function counter(){
            interviewJobs.innerText = interviewArray.length;
            interviewJobsCount.innerText = interviewArray.length
            rejectedJobs.innerText  = rejectedArray.length;
            rejectedJobsCount.innerText = rejectedArray.length;
          }

     // interview section theke card delete 
        mainContainer.addEventListener('click', (event)=>{
          if( currentStatus == 'interview-button'){
            if(event.target.id == 'delete-btn'){
              let parent = event.target.parentNode.parentNode;
              let companyName = parent.querySelector('.company-name').innerText;
              let existingItem = interviewArray.findIndex( item => item.companyName == companyName);
              interviewArray.splice(existingItem, 1);
              parent.remove();
              counter();
              if(!interviewArray.length){
                noJobsAvailable.classList.remove('hidden');
             }else{
                noJobsAvailable.classList.add('hidden');
             }
            }
          }  
        
        });


        //    reject section theke card delete
      mainContainer.addEventListener('click', (event)=>{
          if( currentStatus == 'reject-button'){
            if(event.target.id == 'delete-btn'){
              let parent = event.target.parentNode.parentNode;
              let companyName = parent.querySelector('.company-name').innerText;
              let existingItem = rejectedArray.findIndex( item => item.companyName == companyName);
              rejectedArray.splice(existingItem, 1);
              parent.remove();
              counter();
              if(!rejectedArray.length){
                noJobsAvailable.classList.remove('hidden');
             }else{
                noJobsAvailable.classList.add('hidden');
             }
            }
          }  
        
        });

    // jobs card information collection 

    mainContainer.addEventListener('click', (event)=>{
        if(event.target.classList.contains('interview-btn')){
         let parent = event.target.parentNode.parentNode.parentNode;
         let companyName = parent.querySelector('.company-name').innerText;
         let position = parent.querySelector('.position').innerText;
         let location = parent.querySelector('.location').innerText;
         let salary = parent.querySelector('.salary').innerText;
         let status = parent.querySelector('.status').innerText;
         let description = parent.querySelector('.description').innerText;
        console.log(status);
        // console.log(companyName,position,location,salary,status,description);
         parent.querySelector('.status').innerText = 'interview';
          parent.querySelector('.status').className = 'status border-1 border-green-400 text-green-500 px-4 py-2 bg-gray-100 font-bold';
        let cardInfo = {
            companyName,
            position,
            location,
            salary,
            status:'interview',
            description
        }
      let existingItem = interviewArray.find( item => item.companyName === cardInfo.companyName);
          
       if(!existingItem){
        interviewArray.push(cardInfo);
       }
    rejectedArray = rejectedArray.filter( item => item.companyName != cardInfo.companyName);
      if( currentStatus == 'reject-button'){
        rejectRander();
      }
       counter();

        } 
         else if(event.target.classList.contains('rejected-btn')){
         let parent = event.target.parentNode.parentNode.parentNode;
         let companyName = parent.querySelector('.company-name').innerText;
         let position = parent.querySelector('.position').innerText;
         let location = parent.querySelector('.location').innerText;
         let salary = parent.querySelector('.salary').innerText;
         let status = parent.querySelector('.status').innerText;
         let description = parent.querySelector('.description').innerText;
        console.log(status);
        // console.log(companyName,position,location,salary,status,description);
         parent.querySelector('.status').innerText = 'reject';
          parent.querySelector('.status').className = 'status border-1 border-red-400 text-red-500 px-4 py-2 bg-gray-100 font-bold';
        let cardInfo = {
            companyName,
            position,
            location,
            salary,
            status:'reject',
            description
        }
      let existingItem = rejectedArray.find( item => item.companyName === cardInfo.companyName);

       if(!existingItem){
        rejectedArray.push(cardInfo);
       }
       interviewArray = interviewArray.filter( item => item.companyName != cardInfo.companyName);
      if( currentStatus == 'interview-button'){
        interviewRander();
      }
       counter();
        }
    })


    // for interview rander

    function  interviewRander(){
        filterSection.innerHTML ='';
        interviewArray.forEach( item =>{
            let div = document.createElement('div');
            div.className = 'card hover:shadow-md hover:shadow-orange-500 border-1 border-1 rounded-md p-8 flex justify-between';
            div.innerHTML = `
              <div class="text space-y-4">
                    <div>
                        <h2 class="company-name font-bold text-xl">${item.companyName}</h2>
                        <p class="position text-[gray]">${item.position}</p>
                    </div>
                    <p class="text-[gray]"><span class="location">${item.location}</span> • Full-time • <span class="salary">${item.salary}</span></p>
                    <div>
                        <button class="status border-1 border-green-400 text-green-500 px-4 py-2 bg-gray-100 font-bold">${item.status}</button>
                        <p class="description mt-2">${item.description}</p>
                    </div>
                    <div class="interview-reject-button flex gap-6">
                        <button class="interview-btn border-2 border-green-400 text-green-500 px-4 py-2 font-semibold rounded-md">INTERVIEW</button>
                        <button class="rejected-btn border-2 border-red-400 text-red-500 px-4 py-2 font-semibold rounded-md"">REJECTED</button>
                    </div>
                </div>
                <div class="delete-btn">
                  <i id="delete-btn" class="fa-solid fa-trash-can text-2xl"></i>
                </div>
            `;
            filterSection.appendChild(div);
        });
     
    }
