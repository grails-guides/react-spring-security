package demo

import grails.rest.Resource
import groovy.transform.CompileStatic

@CompileStatic
@Resource(uri = '/api/model')
class Model {

    String name

    static constraints = {
    }
}
