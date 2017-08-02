package demo

import grails.rest.Resource
import groovy.transform.CompileStatic

@CompileStatic
@Resource(uri = '/api/make')
class Make {

    String name

    static constraints = {
    }
}
