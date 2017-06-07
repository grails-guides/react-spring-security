package react.spring.security

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.Resource

@Secured(['ROLE_DRIVER'])
@Resource(uri = '/api/model')
class Model {

    String name

    static constraints = {
    }
}
