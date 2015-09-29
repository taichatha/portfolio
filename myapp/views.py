from django.shortcuts import render




def index(request):
    context = {}
    return render(request, 'myapp/index.html', context)


def resume(request):
    context = {}
    return render(request, 'myapp/resume.html', context)



def projects(request):
    context = {}
    return render(request, 'myapp/projects.html', context)



def contact(request):
    context = {}
    return render(request, 'myapp/contact.html', context)