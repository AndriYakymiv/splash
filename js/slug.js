function slugify(title) {
  // Change code below this line

    const slug = title.toLowerCase().split(' ').join('-');
    return (slug);


    // console.log(slug);

}

slugify("Arrays for begginers")