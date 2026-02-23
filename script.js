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