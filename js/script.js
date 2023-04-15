//for filtering and searching courses
document.getElementById('category').addEventListener('change', filterCourses);
document.getElementById('difficulty').addEventListener('change', filterCourses);
document.getElementById('search').addEventListener('input', filterCourses);

function filterCourses() {
  const category = document.getElementById('category').value;
  const difficulty = document.getElementById('difficulty').value;
  const searchKeyword = document.getElementById('search').value.toLowerCase();

  const courseItems = document.querySelectorAll('.course-item');
  courseItems.forEach(courseItem => {
    const courseCategory = courseItem.getAttribute('data-category').toLowerCase();
    const courseDifficulty = courseItem.getAttribute('data-difficulty').toLowerCase();
    const courseTitle = courseItem.querySelector('.course-title').textContent.toLowerCase();
    const courseDescription = courseItem.querySelector('.course-description').textContent.toLowerCase();


    if ((category === 'all' || courseCategory.includes(category)) &&
        (difficulty === 'all' || courseDifficulty.includes(difficulty)) &&
        (courseTitle.includes(searchKeyword)) || courseDescription.includes(searchKeyword)) {
            courseItem.style.display = 'block';
            } else {
            courseItem.style.display = 'none';
            }
            });
}
